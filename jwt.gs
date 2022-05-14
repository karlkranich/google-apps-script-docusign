// Many thanks to Amit Agarwal for this function at https://www.labnol.org/code/json-web-token-201128
// For DocuSign, we just needed to change the algorithm to RS256
// Save this file in a Google Apps Script project

const createJwt = ({ privateKey, expiresInHours, data = {} }) => {
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const now = Date.now();
  const expires = new Date(now);
  expires.setHours(expires.getHours() + expiresInHours);

  // iat = issued time, exp = expiration time
  const payload = {
    exp: Math.round(expires.getTime() / 1000),
    iat: Math.round(now / 1000),
  };

  // add user payload
  Object.keys(data).forEach(function (key) {
    payload[key] = data[key];
  });

  const base64Encode = (text, json = true) => {
    const data = json ? JSON.stringify(text) : text;
    return Utilities.base64EncodeWebSafe(data).replace(/=+$/, '');
  };

  const toSign = `${base64Encode(header)}.${base64Encode(payload)}`;
  const signatureBytes = Utilities.computeRsaSha256Signature(toSign, privateKey);
  const signature = base64Encode(signatureBytes, false);
  return `${toSign}.${signature}`;
};
