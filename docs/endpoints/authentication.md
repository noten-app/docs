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

In Version 1 of the API, users needed to authenticate using their password. This is not very secure because the user needs to trust the client (Your Application) and give it their password. So now we do not allow the [`Resource Owner Password Credentials Grant`](https://www.rfc-editor.org/rfc/rfc6749#section-4.3) anymore but rather supprt the [`Authorization Code Grant`](https://www.rfc-editor.org/rfc/rfc6749#section-4.1) and the [`Implicit Grant`](https://www.rfc-editor.org/rfc/rfc6749#section-4.2)!

By using those Grant Types, the user gets redirected to Noten-App's Login Page and then authorizes your application which then is granted the access token.

:::info Recommended Grant Type

When using the Authorization Code Grant, the users Web-Browser generates a token with which your application can request the final Access Token whilst when using the Implicit Grant, the users Web-Browser requests the final Access Token ans relays that to your application.

We recommend you use the Authorization Code Grant for applications where you need constant access to the users data. The Implicit Grant should only be used when a low number of requests need to be made like requesting a users ID one Time.

This is due to the nature of Implicit Grant not allowing a refresh token to be generated, so you can only use the access token provided for the duration the access token is validated!

:::

## Authorization Code Grant

### Requesting an Access Token

This Endpoint requires Parameters in `application/x-www-form-urlencoded` format.

#### Authorization URL Example

```
https://api.noten-app.de/v2/auth/authorize?response_type=code&client_id=s6bhdrkq&state=xyz&redirect_uri=
```

The `grant_type` parameter MUST be set to "code" as this indicates you want to use the Authorization Code Grant Type. The `client_id` parameter is the ID you received when registering your application in the developer portal. The `redirect_uri` parameter is the URI you want to receive the auhtorization code under. The `state` parameter is a parameter defined by [`RFC6749 - Section 10.12`](https://www.rfc-editor.org/rfc/rfc6749#section-10.12).

:::info

The `redirect_uri` can only be one of the URIs you registered within the developer-portal!
Otherwise the user and you will be notified and the user cant authenticate to your application!

:::

#### Access Token Response

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

#### Code Example

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

## Authenticating to other Endpoints

To authenticate to any Endpoints just add a authentication Header containing the access_token.

### Code Example

```js
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.noten-app.de/v1/classes",
  headers: {
    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",
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
