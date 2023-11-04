---
sidebar_position: 5
title: Grades
tags:
  - Grading
  - Grade
  - Grades
  - Mark
  - Marks
  - Note
  - Notes
---

## Endpoints and Methods

| Endpoints           | Methods | Use                                                  |
| ------------------- | ------- | ---------------------------------------------------- |
| /grades/{:classId}  | GET     | Get a List of all Grades of class with ID {:classID} |
| /grades/{:classId}  | POST    | Create a new Grade in class with ID {:classID}       |
| /grades/{:gradeId}/ | DELETE  | Delete a Grade                                       |
| /grades/{:gradeId}/ | PATCH   | Change Grade details                                 |

## GET /grades/{:classId}

### Request

```js
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.noten-app.de/v2/grades/a76ak8g8",
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
    "id": "jqhugsad",
    "subject": "idsa7jka",
    "given": "2023-05-12",
    "deadline": "2023-05-10",
    "text": "Read p. 114+115",
    "type": "b",
    "status": 1
  },
  {
    "id": "sadiuaz1",
    "subject": "oiasdu87",
    "given": "2023-04-09",
    "deadline": "2023-07-18",
    "text": "p. 12-14",
    "type": "b",
    "status": 1
  }
]
```

## POST /grades/{:classId}

### Request

```js
var axios = require("axios").default;

var options = {
  method: "POST",
  url: "https://api.noten-app.de/v2/grades/a76ak8g8",
  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },
  data: {
    subject: "idsa7jka",
    given: "2023-07-22",
    deadline: "2023-07-23",
    text: "Read p. 118+119",
    type: "w",
    status: 1,
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
  "id": "jqhugsad"
}
```

## DELETE /grades/{:gradeId}/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "DELETE",
  url: "https://api.noten-app.de/v2/grades/jqhugsad",
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
  "success": true
}
```

## PATCH /grades/{:gradeId }/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "PATCH",
  url: "https://api.noten-app.de/v2/grades/jqhugsad",
  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },
  data: {
    subject: "idsa7jka",
    given: "2023-07-22",
    deadline: "2023-07-23",
    text: "Read p. 120-125",
    type: "w",
    status: 1,
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
