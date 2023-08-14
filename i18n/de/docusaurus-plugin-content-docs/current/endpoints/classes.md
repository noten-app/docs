---
sidebar_position: 3
title: Fächer
tags:
  - Fach
  - Fächer
  - Endpunkt
---

## Endpunkte und Methoden

| Endpunkt        | Methode | Nutzen                       |
| --------------- | ------- | ---------------------------- |
| /classes/       | GET     | Anfragen aller Fächer        |
| /classes/       | POST    | Neues Fach anlegen           |
| /classes/{:id}/ | DELETE  | Fach löschen                 |
| /classes/{:id}/ | PATCH   | Fach-Einstellungen verändern |

## GET /classes/

### Anfrage

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

### Antwort

```json
{}
```

## POST /classes/

### Anfrage

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

### Antwort

```json
{}
```

## DELETE /classes/{:id}

### Anfrage

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

### Antwort

```json
{}
```

## PATCH /classes/{:id}

### Anfrage

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

### Antwort

```json
{}
```
