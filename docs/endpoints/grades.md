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
{
  "id": "jqhugsad",
  "subject": "idsa7jka",
  "type": "k",
  "note": "Second Exam",
  "date": "2023-05-12",
  "grade": 2.31
}
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
    type: "k",
    note: "Second Exam",
    date: "2023-05-12",
    grade: 2.31,
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
    type: "k",
    note: "Second Exam",
    date: "2023-05-12",
    grade: 2.31,
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
  "success": true
}
```
