---
sidebar_position: 6
title: Settings
tags:
  - Settings
  - Setting
  - Account
---

## Endpoints and Methods

| Endpoints  | Methods | Use                             |
| ---------- | ------- | ------------------------------- |
| /settings/ | GET     | Get the Settings of the User    |
| /settings/ | PATCH   | Change the Settings of the User |

:::note Why store settings on our servers?
We recommend storing the settings on our servers, as they than can be synced across devices and all applications using our API.
:::

## GET /settings/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.noten-app.de/v2/settings",
  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },
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

### Response

```json
{
  "rounding": 1,
  "sorting": "average",
  "gradesystem": "noten",
  "school_year": "a76ak8g8"
}
```

## PATCH /grades/settings/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "PATCH",
  url: "https://api.noten-app.de/v2/settings",
  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },
  {
    "rounding": 2,
    "sorting": "date",
    "gradesystem": "points",
    "school_year": "a76ak8g8"
  }
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

### Response

```json
{
  "success": true
}
```
