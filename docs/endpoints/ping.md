---
sidebar_position: 99
title: Ping
tags:
  - Ping
  - Latency
  - Latency Test
  - Latency Check
  - Check
  - Test
  - Ping Test
---

The Ping-Endpoint returns the latency between the API-Server and the Database-Server.  
It can be used to check if the API-Server AND the Database-Servers are Online.  
Also it does NOT require Authentication!

## GET /ping/

### Request

```js
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.noten-app.de/ping",
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
  "ping": "0.564ms"
}
```
