---
sidebar_position: 3
title: Classes
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

## Endpoints and Methods

| Endpoints       | Methods | Use                       |
| --------------- | ------- | ------------------------- |
| /classes/       | GET     | Get a List of all Classes |
| /classes/       | POST    | Create a new Class        |
| /classes/{:id}/ | DELETE  | Delete a Class            |
| /classes/{:id}/ | PATCH   | Change Class details      |

## GET /classes/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.noten-app.de/v1/classes",
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
[
  {
    "name": "Mathematics",
    "color": "ffffff",
    "user_id": "5negptbo-lt6v-9qos-ws1a-1s5qxe36k3op",
    "id": 3,
    "last_used": "2023-06-29T00:00:00.000Z",
    "grade_k": 60,
    "grade_m": 30,
    "grade_t": "10",
    "grade_s": 0,
    "average": 2.16667
  },
  {
    "name": "English",
    "color": "dddd00",
    "user_id": "5negptbo-lt6v-9qos-ws1a-1s5qxe36k3op",
    "id": 1,
    "last_used": "2023-07-10T00:00:00.000Z",
    "grade_k": 60,
    "grade_m": 40,
    "grade_t": "1exam",
    "grade_s": 0,
    "average": 2.69118
  }
]
```

## POST /classes/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "POST",
  url: "https://api.noten-app.de/v1/classes",
  headers: {
    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",
    "Content-Type": "application/json",
  },
  data: {
    name: "Mathematics",
    color: "4e083f",
    grade_k: 35,
    grade_m: 45,
    grade_t: "1exam",
    grade_s: 10,
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

### Response

```json
{
  "success": true,
  "id": 148
}
```

## DELETE /classes/{:id}

### Request

```js
var axios = require("axios").default;

var options = {
  method: "DELETE",
  url: "https://api.noten-app.de/v1/classes/42",
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

### Response

```json
{
  "success": true
}
```

## PATCH /classes/{:id}

### Request

```js
var axios = require("axios").default;

var options = {
  method: "PATCH",
  url: "https://api.noten-app.de/v1/classes/42",
  headers: {
    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",
    "Content-Type": "application/json",
  },
  data: {
    name: "Mathematik",
    color: "4e083f",
    grade_k: 35,
    grade_m: 45,
    grade_t: 5,
    grade_s: 5,
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

### Response

```json
{
  "success": true
}
```
