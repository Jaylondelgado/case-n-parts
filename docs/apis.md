# APIs

## Create a new user

- **Method**: `POST`
- **Path**: /api/users

Input:

```json
{
  "username": string,
  "password": string,
  "email": string,
}
```

Output:

```json
{
  "username": string,
  "password": string,
  "email": string,
}
```

Creates a new user that requires a username, password, and email.

## Update a user

- **Method**: `PUT`
- **Path**: /api/users/&lt;int:pk/

Input:

```json
{
  "password": string,
  "email": string,
}
```

Output:

```json
{
  "password": string,
  "email": string,
}
```

Allows user to update their password or email, or both.

## Delete a user

- **Method**: `DELETE`
- **Path**: /api/users/<int:pk>/

Deletes a user.

## List new builds

- **Method**: `GET`
- **Path**: /api/builds

Output:

```json
{
    "build_name": string,
    "case": string,
    "gpu": string,
    "cpu": string,
    "ram": string,
    "motherboard": string,
    "power_supply": string,
}
```

List all builds that all users publish to website.

## Create a new build

- **Method**: `POST`
- **Path**: /api/builds/create

Input:

```json
{
    "build_name": string,
    "case": string,
    "gpu": string,
    "cpu": string,
    "ram": string,
    "motherboard": string,
    "power_supply": string,
    "user_id": string
}
```

Output:

```json
{
    "build_name": string,
    "case": string,
    "gpu": string,
    "cpu": string,
    "ram": string,
    "motherboard": string,
    "power_supply": string,
    "user_id": string
}
```

Create a new build from some or all of the computer components. It uses data compiled from all the single components lists allowing for the user to choose their desired parts.

## Update a build

- **Method**: `PUT`
- **Path**: /api/builds/update/<int:pk>/

Input:

```json
{
    "build_name": string,
    "case": string,
    "gpu": string,
    "cpu": string,
    "ram": string,
    "motherboard": string,
    "power_supply": string,
    "user_id": string
}
```

Output:

```json
{
    "build_name": string,
    "case": string,
    "gpu": string,
    "cpu": string,
    "ram": string,
    "motherboard": string,
    "power_supply": string,
    "user_id": string
}
```

Allows user to update their saved or unfinished builds.

## Detail of a build

- **Method**: `GET`
- **Path**: /api/builds/<int:pk>

Output:

```json
{
    "build_name": string,
    "case": string,
    "gpu": string,
    "cpu": string,
    "ram": string,
    "motherboard": string,
    "power_supply": string,
    "user_id": string
}
```

Shows a more detailed description of the computer build and the comments from the author.

## Delete a build

- **Method**: `DELETE`
- **Path**: /api/builds/<int:pk>

Deletes the build.

<!-- ## List comments

- **Method**: `GET`
- **Path**: /api/builds/<int:pk>/comments/

Output:

```json
{
    "user": string,
    "build_name": string,
    "comments": string,
    "rating": int,
}
```

Lists all comments for a specific build.

## Create comments

- **Method**: `POST`
- **Path**: /api/builds/<int:pk>/comments/

```json
Input:
{
  "comments": string,
  "rating": int,
}
```

```json
Output:
{
    "user": string,
    "comments": string,
    "rating": int,
}

```

Post a review for a specific build.

## Detail comments

- **Method**: `GET`
- **Path**: /api/builds/<int:pk>/comments/<int:pk>/

Detailed view of review.

Output:

```json
{
    "user": string,
    "comments": string,
    "rating": int,
}

```

## Edit comments

- **Method**: `PUT`
- **Path**: /api/builds/<int:pk>/comments/<int:pk>/

```json
Input:
{
  "comments": string,
  "rating": int,
}
```

```json
Output:
{
    "user": string,
    "comments": string,
    "rating": int,
}

```

Allow user to edit their review on specific build

## Delete comments

- **Method**: `DELETE`
- **Path**: /api/builds/<int:pk>/comments/<int:pk>/

Delete review from specific build. -->

## List Gpu

- **Method**: `GET`
- **Path**: /api/gpus

Output:

```json
{
    "brand": string,
    "max_resolution": string,
    "memory_speed": int,
    "coprocessor": string,
    "ram_size": int,
    "dimensions": string,
}
```

Using the webscraper, the data gathered from the website will be sorted into their respective columns and provide a detailed description of the product.

## List Cpu

- **Method**: `GET`
- **Path**: /api/cpus

Output:

```json
{
    "manufacturer": string,
    "processor_count": int,
    "model": string,
    "socket": string,
    "speed": int,
    "dimensionions": string
}
```

Using the webscraper, the data gathered from the website will be sorted into their respective columns and provide a detailed description of the product.

## List Powersupply

- **Method**: `GET`
- **Path**: /api/powersupplies

Output:

```json
{
    "manufacturer": string,
    "processor_count": int,
    "model": string,
    "socket": string,
    "speed": int,
    "dimensionions": string
}
```

Using the webscraper, the data gathered from the website will be sorted into their respective columns and provide a detailed description of the product.

## List Ram

- **Method**: `GET`
- **Path**: /api/ram

Output:

```json
{
    "brand": string,
    "capacity": int,
    "clock_speed": int,
    "speed": int,
    "type": string
}
```

Using the webscraper, the data gathered from the website will be sorted into their respective columns and provide a detailed description of the product.

## List Motherboard

- **Method**: `GET`
- **Path**: /api/motherboards

Output:

```json
{
    "brand": string,
    "ram": string,
    "memory_speed": int,
    "cpu_socket": string,
    "chipset": string,
    "dimensions": string,
}
```

Using the webscraper, the data gathered from the website will be sorted into their respective columns and provide a detailed description of the product.

## List Hardrives

- **Method**: `GET`
- **Path**: /api/harddrives

Output:

```json
{
    "brand": string,
    "capacity": int,
    "rotational_speed": int,
    "interface": string,
    "dimensions": string

}
```

Using the webscraper, the data gathered from the website will be sorted into their respective columns and provide a detailed description of the product.
