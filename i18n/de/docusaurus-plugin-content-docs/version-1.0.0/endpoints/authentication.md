---
sidebar_position: 1
title: Authentifizierung
tags:
  - Auth
  - Authentifizierung
  - Login
  - Token
  - Tokens
  - Refresh
  - Refresh Token
  - Refresh Tokens
  - Erneuern
  - Erneuerungs
  - Erneuerungs Token
  - Erneuerungs Tokens
---

Um jegliche Endpunkte der API zu verwenden, musst du dich Authentifizieren.

Alle Authentifizierungs-Endpunkte nutzen den RFC6749-(OAuth2.0)-Standart.

Aktuell wird nur der [`Resource Owner Password Credentials Grant`](https://www.rfc-editor.org/rfc/rfc6749#section-4.3) unterstützt.

# Endpunkte und Methoden

## Einen Access-Token anfragen

### Authentifizierungs URL (Beispiel)

```
https://api.noten-app.de/v1/auth/token?grant_type=password&username=johndoe&password=A3ddj3w
```

Der Wert von `grant_type` MUSS "password" sein, da dies aktuell der einzig unterstützte Typ ist. Der `username`-Parameter entspricht dem Nutzernamen des Accounts, den du Authentifizieren willst - der `password`-Parameter entspricht dem Passwort des Accounts, den du Authentifizieren willst.

### Access-Token Antwort

Eine Antwort könnte folgendermaßen aussehen:

```json
{
  "access_token": "DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "lCVzojP2OGkggXm9NRFflppHXoSjWeKu"
}
```

Der `access_token` ist der Token, den du zum Authentifizieren in weiteren Anfragen benötigst, der `token_type` ist immer 'Bearer'. Der `expires_in`-Parameter beschreibt wie lange der access_token validiert ist (3600 Sekunden = 1 Stunde). Der `refresh_token` muss genutzt werden um den access_token zu erneuern, nachdem die validierung zuende ist.

### Code-Beispiel

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

## Erneuern eines Access-Tokens

Der Vorgang um den Access-Token zu erneuern erfüllt genauso wie auch die erstmalige Anfrage den [RFC6749-(OAuth2.0)-Standart (Sektion 6)](https://www.rfc-editor.org/rfc/rfc6749#section-6).

### Authentifizierungs-URL (Beispiel)

```
https://api.noten-app.de/v1/auth/refresh?grant_type=refresh_token&refresh_token=lCVzojP2OGkggXm9NRFflppHXoSjWeKu
```

Der `grant_type`-Parameter MUSS "refresh_token" sein, da diese Anfrage genutzt wird um einen Access-Token zu erneuern. Der `refresh_token`-Parameter entspricht dem Token, den du bei der erstmaligen Anfrage erhalten hast.

Die Antwort wird die gleiche sein wie die, welche du zur erstmaligen Authentifizierung erhalten hast. (Du erhältst einen neuen Access-Token UND einen neuen Refresh-Token)!

### Code-Beispiele

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

## Authentifizierung an anderen Endpunkten

Um dich an anderen Enpunkten zu Authentifizieren musst du nur einen Authentication-Header mit dem access_token nutzen.

### Code-Beispiel

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
