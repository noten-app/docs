---
sidebar_position: 4
title: Subjects
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

| Endpoints          | Methods | Use                                         |
| ------------------ | ------- | ------------------------------------------- |
| /subjects/         | GET     | Get a List of all Subjects                  |
| /subjects/{:year}/ | GET     | Get a List of all Subjects for year {:year} |
| /subjects/         | POST    | Create a new Subject                        |
| /subjects/{:id}/   | DELETE  | Delete a Subject                            |
| /subjects/{:id}/   | PATCH   | Change Subject details                      |

:::note
If possible, use the `year` parameter to get a list of subjects for a specific year.  
This will improve performance and reduce the amount of data that needs to be transferred.
:::

## GET /subjects/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.noten-app.de/v2/subjects",
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
    "average": 2.16667,
    "year": "sjdu6a9j"
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
    "average": 2.69118,
    "year": "a76ak8g8"
  }
]
```

## GET /subjects/{:id}

### Request

```js
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.noten-app.de/v2/subjects/a76ak8g8",
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
    "name": "English",
    "color": "dddd00",
    "user_id": "5negptbo-lt6v-9qos-ws1a-1s5qxe36k3op",
    "id": 1,
    "last_used": "2023-07-10T00:00:00.000Z",
    "grade_k": 60,
    "grade_m": 40,
    "grade_t": "1exam",
    "grade_s": 0,
    "average": 2.69118,
    "year": "a76ak8g8"
  }
]
```

## POST /subjects/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "POST",
  url: "https://api.noten-app.de/v2/subjects",
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
    year: "a76ak8g8",
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

## DELETE /subjects/{:id}

### Request

```js
var axios = require("axios").default;

var options = {
  method: "DELETE",
  url: "https://api.noten-app.de/v2/subjects/42",
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

## PATCH /subjects/{:id}

### Request

```js
var axios = require("axios").default;

var options = {
  method: "PATCH",
  url: "https://api.noten-app.de/v2/subjects/42",
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
