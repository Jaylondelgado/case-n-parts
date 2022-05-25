# Data models

## User

| name     | type                 | unique | optional |
| -------- | -------------------- | ------ | -------- |
| username | varchar(40)          | yes    | false    |
| password | varchar(30)          | no     | false    |
| email    | varchar(50)          | yes    | false    |
| my_build | foreign key to build | yes    | true     |

## Build

| name         | type                        | unique | optional |
| ------------ | --------------------------- | ------ | -------- |
| build_name   | varchar(60)                 | yes    | false    |
| case         | foreign key to case         | no     | true     |
| gpu          | foreign key to gpu          | yes    | true     |
| cpu          | foreign key to cpu          | yes    | true     |
| ram          | foreign key to ram          | yes    | true     |
| motherboard  | foreign key to motherboard  | yes    | true     |
| power_supply | foreign key to power_supply | yes    | true     |

## Gpu

| name           | type         | unique | optional |
| -------------- | ------------ | ------ | -------- |
| brand          | varchar(60)  | yes    | false    |
| max_resolution | varchar(15)  | no     | false    |
| memory_speed   | int          | no     | false    |
| coprocessor    | varchar(100) | no     | false    |
| ram_size       | int          | no     | false    |
| dimensions     | varchar(30)  | no     | false    |

## Cpu

| name            | type        | unique | optional |
| --------------- | ----------- | ------ | -------- |
| manufacturer    | varchar(60) | yes    | false    |
| processor_count | int         | no     | false    |
| model           | varchar(50) | no     | false    |
| socket          | varchar(20) | no     | false    |
| speed           | int         | no     | false    |
| dimensionions   | varchar(30) | no     | false    |

## PowerSupply

| name       | type        | unique | optional |
| ---------- | ----------- | ------ | -------- |
| brand      | varchar(60) | yes    | false    |
| voltage    | int         | no     | false    |
| wattage    | int         | no     | false    |
| dimensions | varchar(50) | no     | false    |

## Ram

| name        | type        | unique | optional |
| ----------- | ----------- | ------ | -------- |
| brand       | varchar(60) | yes    | false    |
| capacity    | int         | no     | false    |
| clock_speed | int         | no     | false    |
| speed       | int         | no     | false    |
| type        | varchar(20) | no     | false    |

## Motherboard

| name         | type        | unique | optional |
| ------------ | ----------- | ------ | -------- |
| brand        | varchar(60) | yes    | false    |
| ram          | varchar(10) | no     | false    |
| memory_speed | int         | no     | false    |
| cpu_socket   | varchar(20) | no     | false    |
| chipset      | varchar(20) | no     | false    |
| dimensions   | varchar(30) | no     | false    |

## Harddrive

| name             | type        | unique | optional |
| ---------------- | ----------- | ------ | -------- |
| brand            | varchar(60) | yes    | false    |
| capacity         | int         | no     | false    |
| rotational_speed | int         | no     | false    |
| interface        | varchar(20) | no     | false    |
| dimensions       | varchar(30) | no     | false    |
