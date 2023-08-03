---
sidebar_position: 1
title: Authentication
tags:
  - Auth
  - Authentication
  - Login
  - Token
  - Tokens
  - Refresh
  - Refresh Token
  - Refresh Tokens
---

To use any Endpoints of this API you will first need to Authenticate.

All Authentication Endpoints use the RFC6749-(OAuth2.0)-Standard.

Currently only the [`Resource Owner Password Credentials Grant`](https://www.rfc-editor.org/rfc/rfc6749#section-4.3) is supported.

# Endpoints and Methods

## Requesting an Access Token

This Endpoint requires Parameters in `application/x-www-form-urlencoded` format.

### Authorization URL Example

```
https://api.noten-app.de/v1/auth/token?grant_type=password&username=johndoe&password=A3ddj3w
```

The `grant_type` parameter MUST be set to "password" as this is currently the only supported Grant Type. The `username` parameter is the Username of the User you want to authenticate and the `password` parameter is the Password of the User you want to authenticate.

### Access Token Response

A response could look something like:

```json
{
  "access_token": "DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "lCVzojP2OGkggXm9NRFflppHXoSjWeKu"
}
```

The `access_token` is the token you need to authenticate in any further requests, the `token_type` always is 'Bearer'. The `expires_in`-parameter describes for how many seconds the access_token is valid (3600 seconds = 1 hour). The `refresh_token` should be used to request a new access_token once the current one expired.

### Code Example

```js
const axios = require("axios").default;

const options = {
  method: "GET",
  url: "https://api.noten-app.de/v1/auth/token",
  params: { grant_type: "password", username: "johndoe", password: "A3ddj3w" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

## Refreshing an Access Token

The flow to refresh your Access Token also follows the [RFC6749-(OAuth2.0)-Standard (Section 6)](https://www.rfc-editor.org/rfc/rfc6749#section-6).

### Authorization URL Example

```
https://api.noten-app.de/v1/auth/refresh?grant_type=refresh_token&refresh_token=lCVzojP2OGkggXm9NRFflppHXoSjWeKu
```

The `grant_type` parameter MUST be set to "refresh_token" as this request is used to refresh an Access Token. The `refresh_token` parameter is the Refresh Token you received when requesting an Access Token.

The response to this will be the same as when requesting an Access Token. (You get a new Access Token and a new Refresh Token)!

### Code Example

```js
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.noten-app.de/v1/auth/refresh",
  params: {
    grant_type: "refresh_token",
    refresh_token: "lCVzojP2OGkggXm9NRFflppHXoSjWeKu",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
```
