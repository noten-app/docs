---
sidebar_position: 3
title: Years
tags:
  - Years
  - Year
  - Management
  - School
  - Grade
---

:::note New Endpoint
Year-Management is a new Feature introduced in Noten-App-2.4.0.  
Therefore, this Endpoint is also new.
:::

## Endpoints and Methods

| Endpoints     | Methods | Use                     |
| ------------- | ------- | ----------------------- |
| /years/       | GET     | Get a List of all Years |
| /years/       | POST    | Create a new Year       |
| /years/{:id}/ | DELETE  | Delete a Year           |
| /years/{:id}/ | PATCH   | Change Year details     |

## GET /years/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.noten-app.de/v2/years/",
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
    "id": "sjdu6a9j",
    "name": "4th Grade"
  },
  {
    "id": "a76ak8g8",
    "name": "5th Grade"
  }
]
```

## POST /years/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "POST",
  url: "https://api.noten-app.de/v2/years",
  headers: {
    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",
    "Content-Type": "application/json",
  },
  data: {
    name: "6th Grade",
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
  "id": "asd7jda9"
}
```

## DELETE /years/{:id}

### Request

```js
var axios = require("axios").default;

var options = {
  method: "DELETE",
  url: "https://api.noten-app.de/v2/years/asd7jda9",
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

## PATCH /years/{:id}

### Request

```js
var axios = require("axios").default;

var options = {
  method: "PATCH",
  url: "https://api.noten-app.de/v2/years/asd7jda9",
  headers: {
    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",
    "Content-Type": "application/json",
  },
  data: {
    name: "3rd Grade",
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
