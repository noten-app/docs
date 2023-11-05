---
sidebar_position: 1
title: Types & Objects
tags:
  - Types
  - Type
  - Variable
  - Variables
  - Data
  - Request
  - Response
  - Objects
---

:::warning Development Documentation
This documentation is also used for development purposes.  
Some of the information may not be relevant to you.  
Also some information may not be accessible for you. (For more information on what is accessible to you, see the respective endpoint documentations)
:::

## Account

| Parameter        | Type                          | Description                              | Example Value                        |
| ---------------- | ----------------------------- | ---------------------------------------- | ------------------------------------ |
| id               | string (modified UUID-Format) | The Account ID of the User               | 5negptbo-lt6v-9qos-ws1a-1s5qxe36k3op |
| displayname      | string                        | The displayname of the User              | "John Doe"                           |
| username         | string                        | The username of the User                 | "johndoe"                            |
| email            | string                        | The email of the User                    | "john@example.com"                   |
| account_creation | string (Timestamp)            | The creation date of the Account         | "2022-07-03 20:33:24"                |
| delete_until     | string (Timestamp)            | The date the Account will be deleted     | null                                 |
| rounding         | int                           | Decimal places grades will be rounded to | 2                                    |
| sorting          | string                        | The sorting method of the grades         | "average"                            |

## Application

| Parameter | Type   | Description                  | Example Value         |
| --------- | ------ | ---------------------------- | --------------------- |
| appname   | string | The name of the Application  | "MyApp"               |
| appurl    | string | The URL of the Application   | "https://example.com" |
| apptoken  | string | The token of the Application | "1234567890"          |
| appid     | string | The ID of the Application    | "1234567890"          |
