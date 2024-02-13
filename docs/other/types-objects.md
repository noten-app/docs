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

:::info
Length values given don't have to be maximum lengths used in the apps.  
We leave some space for future changes and past changes.
:::

## Grades

| Parameter  | Type   | Length     | Description            | Example Value                            |
| ---------- | ------ | ---------- | ---------------------- | ---------------------------------------- |
| grade_id   | String | 8 Chars    | The ID of the Grade    | `"jqhugsad"`                             |
| user_id    | String | 36 Chars   | The ID of the User     | `"a76ak8g8-7a6k-4a8g-8a76-ak8g8a76ak8g"` |
| subject_id | String | 8 Chars    | The ID of the Subject  | `"idsa7jka"`                             |
| type       | String | 1 Char     | The Type of the Grade  | `"W"`                                    |
| note       | String | < 64       | The Text of the Grade  | `"Second Exam"`                          |
| date       | Date   |            | The Date of the Grade  | `"2021-09-01"`                           |
| grade      | float  | 2 Decimals | The Value of the Grade | `2.31`                                   |

### Values for `type`

| Value | Description |
| ----- | ----------- |
| `"k"` | Exam        |
| `"m"` | Oral Grade  |
| `"t"` | Test        |
| `"s"` | Other       |

## Homework

| Parameter   | Type   | Length   | Description                        | Example Value                            |
| ----------- | ------ | -------- | ---------------------------------- | ---------------------------------------- |
| user_id     | String | 36 Chars | The ID of the User                 | `"a76ak8g8-7a6k-4a8g-8a76-ak8g8a76ak8g"` |
| homework_id | String | 8 Chars  | The ID of the Homework             | `"jqhugsad"`                             |
| subject_id  | String | 8 Chars  | The ID of the Subject              | `"idsa7jka"`                             |
| given       | Date   |          | The Date the Homework is given     | `"2021-09-01"`                           |
| due         | Date   |          | The Date the Homework is due       | `"2021-09-01"`                           |
| task        | String | < 256    | The Task of the Homework           | `"Do the Math Homework on Page 42"`      |
| type        | String | 1 Char   | The Type of the Homework           | `"W"`                                    |
| status      | int    |          | The Status of the Homework         | `0`                                      |
| year        | String | 8 Chars  | The Year the Homework is linked to | `"a76ak8g8"`                             |

### Values for `type`

| Value | Description |
| ----- | ----------- |
| `"W"` | Worksheet   |
| `"B"` | Book        |
| `"V"` | Vocabulary  |
| `"O"` | Other       |

### Values for `status`

| Value | Description |
| ----- | ----------- |
| `0`   | Open        |
| `1`   | Done        |
| `2`   | Skipped     |

## Settings

| Parameter    | Type   | Length | Description                | Example Value                            |
| ------------ | ------ | ------ | -------------------------- | ---------------------------------------- |
| user_id      | String | 36     | The ID of the User         | `"a76ak8g8-7a6k-4a8g-8a76-ak8g8a76ak8g"` |
| rounding     | int    |        | The Rounding of the Grades | `2`                                      |
| sorting      | int    |        | The Sorting of the Grades  | `0`                                      |
| current_year | String | 8      | The ID of the Current Year | `"a76ak8g8"`                             |

### Values for `sorting`

| Value | Description           |
| ----- | --------------------- |
| `0`   | Newest First          |
| `1`   | Alphabetical          |
| `2`   | Highest Average First |
| `3`   | Lowest Average First  |

## Subject

| Parameter  | Type            | Length   | Description                                     | Example Value                            |
| ---------- | --------------- | -------- | ----------------------------------------------- | ---------------------------------------- |
| name       | String          | < 20     | The Name of the Subject                         | `"Math"`                                 |
| color      | String          | 6 Chars  | The Color of the Subject (Hex)                  | `"ff0000"`                               |
| user_id    | String          | 36 Chars | The ID of the User                              | `"a76ak8g8-7a6k-4a8g-8a76-ak8g8a76ak8g"` |
| subject_id | String          | 8 Chars  | The ID of the Subject                           | `"idsa7jka"`                             |
| last_used  | Date (ISO 8601) |          | The last date a grade was added to this Subject | `"2021-09-01"`                           |
| weight_e   | int             |          | The Weight of Exams                             | `45`                                     |
| weight_o   | int             |          | The Weight of Oral Grades                       | `30`                                     |
| weight_t   | String          |          | The Weight of Tests                             | `10`                                     |
| weight_m   | int             |          | The Weight of the "other"-Category              | `15`                                     |
| average    | float           |          | The Average of all Grades                       | `2.41`                                   |
| year       | String          | 8 Chars  | The Year the Subject is linked to               | `"a76ak8g8"`                             |

## Users

| Parameter     | Type      | Length   | Description                  | Example Value                            |
| ------------- | --------- | -------- | ---------------------------- | ---------------------------------------- |
| user_id       | String    | 36 Chars | The ID of the User           | `"a76ak8g8-7a6k-4a8g-8a76-ak8g8a76ak8g"` |
| username      | String    |          | The Username                 | `"MaxMustermann"`                        |
| email         | String    |          | The Email                    | `"max@example.com"`                      |
| password      | String    |          | The Password                 | `"password"`                             |
| user_creation | timestamp |          | The Date the User registered | `"2021-09-01"`                           |

:::info
We do not make the informations stored in the `user` object public.  
This is just a list of the parameters we store.
:::

## Years

| Parameter | Type   | Length  | Description          | Example Value |
| --------- | ------ | ------- | -------------------- | ------------- |
| id        | String | 8 Chars | The ID of the Year   | `"a76ak8g8"`  |
| name      | String | < 20    | The Name of the Year | `"2021/2022"` |
