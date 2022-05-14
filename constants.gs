// Create this file in a Google Apps Script project
// and fill in the values appropriately
// The private key created in DocuSign must be converted to the correct form
// with the following command before being inserted below.
// (the downloaded key is private-rsa-key.pem and the new key is new-private.pem
// openssl pkcs8 -topk8 -inform pem -in private-rsa-key.pem -outform pem -nocrypt -out new-private.pem

const docusign = {
  tokenUri: "https://account-d.docusign.com/oauth/token",
  restUri: "https://demo.docusign.net/restapi/v2.1/accounts/your-api-account-id-goes-here",
  data: {
    "iss": "your-integration-key-goes-here",
    "sub": "your-user-id-goes-here",
    "aud": "account-d.docusign.com",
    "scope": "signature"
  },
  privateKey: "-----BEGIN PRIVATE KEY-----\n" +
    "this-is-your-converted-private-key--MIAQEFAASCgEAAoIBAQCqbv6Uo08\n" +
    "RV9GdckbQRjb/97rdBYKHoOunR2hh5l6sf0rS8w03OObrAy47ULNSSVP4TJj14+r\n" +
    "RV9GdckbQRjbN4Swb9Mpma+Xb0n2yoU5RiO2LWFT2AJSVg82dff+SJSadPQMjBtD\n" +
    "RV9GdckbQRjbz1MGE9RV9GdckbQRjbYa78hyjYqLHLH09w+tj06GN68Qls/kGEty\n" +
    "GdckbQRjbasesKDx1wj0LCD5CSbzFQya5ordxZduykgRI8tNrreOnAs9fGpPMMIw\n" +
    "RVkbQ79ttewDIZ1QpMBAAECggz36fW6ColNrTOEyEpTFdJrWDyNzEtfykRNdcQSJ\n" +
    "67xBWUDHAgMBAAECggEAQoTImuW0Te+T6o9WcJB1H693Vw0g/Gxb2p3phIS4BOY0\n" +
    "2cE9KytWCSrCbZpsxNfWUz4BsJARtTMcUVLAb+bkecihq75kalc2rPgWkAosUBBX\n" +
    "pHyrU3Ep5GCoXU9WZ6iaTmYwjaoo2D7Uo0GHRhy7PfFcWyvzP9E0EtGE2LzLAVAW\n" +
    "KUl1NWa6QA4CGJtlJTJFY4YUPqgw3E5S+3r3DcLNBAos6/cnTQ8z7MGszzxBHxCj\n" +
    "sPxAtZpJd7cpzwWGcesWqBTYtFoXca0jZ1GsCw/RnoVtAeaidvRe9le4k9s1XUsZ\n" +
    "BApD7cN1HUhtCSsMXcXBqHHbjesMj3E4bbcRWEyt9QKBgQDq59TwLrGYPq6UHc9w\n" +
    "Ssq8NWvVI9iZ20N4JpG3xo6+XyXtPLxx6qsHuiZCW0+ycuTqNndRdonHAiF1iHb8\n" +
    "MGG7tGLWG5AYfqfoq+y6jQq1JSA6JNFzPgmC9zQkDa2j72/zm0Mi7fhRy80n/ZT3\n" +
    "qjr9y08myW4WvqHtfIxlAzYwFQKBgQC5vQlPPUOAGfLr7WiW8qO31YxQsnmHOQPU\n" +
    "+8xLduf/BlaR7Ax5NTfvl8GbLAJRlqIBd29t0ayg0ccwCmK43xAoLtbpgcuxuPLt\n" +
    "j2+OqtzlqFn/BGf7vxz4pWrphCdor8vgfNwMsbhvbNx/pUnoAsSaz8xCXWjXNsnt\n" +
    "UBVfgYiIawKBgQDKHNZ2IXbki2oiPtPwxilRbpVtOf5vwtx2UJkoCktfOPak/JEX\n" +
    "YtXtPBkXFwGnhHu5mUtoaBl7hTXMrrHRor80haxUlDqTGMbXxrVUfW4tFdh4rp0Y\n" +
    "DtSYPqI6Mxqn5qfobjqBn0b8+eF2+xRlU66WF4vuz3lNUJB6iaMydmT1UQKBgQCl\n" +
    "8TY4DUwZTxWxo1ImSnHq9GeAUXQyU8YQq0ZCxeFP/6GojXQ3dkybSsI2mIMZ0bK8\n" +
    "DLEJNKM+qy2CxkSdVu1geTiZNtV92vdvNw88L3tb06VUKeOdD4oau+9g4ikzZpyH\n" +
    "3AXdcYqOQnxdrpbxKkfs6GpdgIcCgHi4BSyTP290MQKBgQCIi2fW0h7tBShRmt/Z\n" +
    "1WA/53/3tmHVIin6RYUDdhlIzUpaBGnamXqgU/lNWPZx3fitRwJfX+dOe9iBsTQo\n" +
    "jP0YJCoaaoPXVUniFy5XL2BC3IdJKEemzRdhFd05Gez8fa7e3LUU6oopF7ywRDeZ\n" +
    "RM6YQfJhB8C80u46gIxVOkCWMQ==\n" +
    "-----END PRIVATE KEY-----\n",
}
