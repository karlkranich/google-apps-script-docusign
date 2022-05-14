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
