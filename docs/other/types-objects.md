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

## Homework

| Parameter | Type            | Length     | Description                       | Example Value    |
| --------- | --------------- | ---------- | --------------------------------- | ---------------- |
| id        | String          | 8 Chars    | The ID of the Task                | `"jqhugsad"`     |
| subject   | String          | 8 Chars    | The Subject the Task is linked to | `"idsa7jka"`     |
| year      | String          | 8 Chars    | The Year the Task is linked to    | `"a76ak8g8"`     |
| given     | Date (ISO 8601) |            | The Date when the Task was given  | `"2021-09-01"`   |
| deadline  | Date (ISO 8601) |            | The Date when the Task is due     | `"2021-09-02"`   |
| text      | String          | < 64 Chars | The Text of the Task              | `"Read Page 12"` |
| type      | String          | 1 Char     | The Type of the Task              | `"w"`            |
| status    | int             | 0, 1, 2    | The Status of the Task            | `0`              |

### Values for `type`

| Value | Description |
| ----- | ----------- |
| `"w"` | Worksheet   |
| `"B"` | Book        |
| `"V"` | Vocabulary  |
| `"O"` | Other       |

### Values for `status`

| Value | Description |
| ----- | ----------- |
| `0`   | Open        |
| `1`   | Done        |
| `2`   | Skipped     |

## Year

| Parameter | Type   | Length  | Description          | Example Value |
| --------- | ------ | ------- | -------------------- | ------------- |
| id        | String | 8 Chars | The ID of the Year   | `"a76ak8g8"`  |
| name      | String | < 20    | The Name of the Year | `"2021/2022"` |

## Subject

| Parameter | Type            | Length     | Description                                     | Example Value  |
| --------- | --------------- | ---------- | ----------------------------------------------- | -------------- |
| id        | String          | 8 Chars    | The ID of the Subject                           | `"idsa7jka"`   |
| name      | String          | < 20       | The Name of the Subject                         | `"Math"`       |
| color     | String          | 6 Chars    | The Color of the Subject (Hex)                  | `"ff0000"`     |
| last_used | Date (ISO 8601) |            | The last date a grade was added to this Subject | `"2021-09-01"` |
| grade_k   | int             |            | The Weight of Exams                             | `45`           |
| grade_m   | int             |            | The Weight of Oral Grades                       | `24`           |
| grade_t   | String          |            | The Weight of Tests                             | `16`           |
| grade_s   | int             |            | The weight of the "other"-Category              | `15`           |
| average   | float           | 4 Decimals | The Average of all Grades                       | `2.41`         |
| year      | String          | 8 Chars    | The Year the Subject is linked to               | `"a76ak8g8"`   |

### Values for `grade_t`

| Value     | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| Number    | If a number is given, Tests are rated normally with the Weight given. |
| `"1exam"` | The Weight of Tests is the same as the Weight of ONE exam.            |

:::note Why do we have a `"1exam"`-Value?
In Germany, the Weight of Tests is usually the same as the Weight of ONE exam.  
As Noten-App is mainly used in Germany, we have added this Value.
:::

## Grade

| Parameter | Type            | Length     | Description                      | Example Value   |
| --------- | --------------- | ---------- | -------------------------------- | --------------- |
| id        | String          | 8 Chars    | The ID of the Grade              | `"jqhugsad"`    |
| subject   | String          | 8 Chars    | The Class the Grade is linked to | `"idsa7jka"`    |
| type      | String          | 1 Char     | The Type of the Grade            | `"k"`           |
| note      | String          | < 64       | The Text of the Grade            | `"Second Exam"` |
| date      | Date (ISO 8601) |            | The Date of the Grade            | `"2021-09-01"`  |
| grade     | float           | 2 Decimals | The Value of the Grade           | `2.31`          |
| year      | String          | 8 Chars    | The Year the Grade is linked to  | `"a76ak8g8"`    |

### Values for `type`

| Value | Description |
| ----- | ----------- |
| `"k"` | Exam        |
| `"m"` | Oral Grade  |
| `"t"` | Test        |
| `"s"` | Other       |

## Settings

| Parameter   | Type   | Length | Description                       | Example Value |
| ----------- | ------ | ------ | --------------------------------- | ------------- |
| rounding    | int    | 1      | The Rounding of Grades            | `1`           |
| sorting     | String | 16     | The Sorting of Grades             | `"average"`   |
| gradesystem | String | 16     | The Gradesystem                   | `"points"`    |
| school_year | String | 8      | The Year the user currently is in | `"a76ak8g8"`  |
