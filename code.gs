// Create this file in a Google Apps Script project

// Call DocuSign API to get a list of completed envelopes
function docusignTest1() {
  var authToken = getAccessToken();
  Logger.log(authToken);
  var dsUri = docusign.restUri + '/envelopes?status=completed&from_date=2022-01-01';
  var headers = {
    'Authorization': 'Bearer ' + authToken,
  }
  var options = {
    'method': 'get',
    'headers': headers,
  };
  var response = UrlFetchApp.fetch(dsUri, options);
  var envObj = JSON.parse(response.getContentText())
  for (var env of envObj.envelopes) {
    Logger.log(env.emailSubject);
    Logger.log(env.envelopeId);
  }
}

// Use a JSON Web Token to get a DocuSign Auth Token
function getAccessToken() {
  // Get a Json Web Token
  const jwt = createJwt({
    privateKey: docusign.privateKey,
    expiresInHours: 1,
    data: docusign.data,
  });

  // Use the JWT to get an auth token
  var formData = {
    'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    'assertion': jwt
  };
  var options = {
    'method' : 'post',
    'payload' : formData
  };
  var response = UrlFetchApp.fetch(docusign.tokenUri, options);
  if (response.getResponseCode() != 200) {
    Logger.log("Auth token request failed");
    return;
  } else {
    var responseObj = JSON.parse(response.getContentText());
    return(responseObj.access_token);
  }
}
