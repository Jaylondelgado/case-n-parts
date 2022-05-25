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
  "my_build": string  //is this necessary?
}
```

Creates a new user that requires a username, password, and email.

## Update a user

- **Method**: `PUT`
- **Path**: /api/users/<int:pk>/

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
}
```

Create a new build from some or all of the computer components. It uses data compiled from all the single componenets lists allowing for the user to choose their desired parts.

## Update a build

- **Method**: `PUT`
- **Path**: /api/builds/update

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
}
```

Shows a more detailed description of the computer build and the comments from the author.

## Delete a build

- **Method**: `DELETE`
- **Path**: /api/builds/<int:pk>

Deletes the build.

## List reviews

- **Method**: `GET`
- **Path**: /api/builds/<int:pk>/reviews/

Output:

```json
{
    "user": string,
    "build_name": string,
    "rating": int,
    "author_comment": string,
}
```

Lists all reviews for a specific build.

## Create reviews

- **Method**: `POST`
- **Path**: /api/builds/<int:pk>/reviews/

Post a review for a specific build.

## Detail reviews

- **Method**: `GET`
- **Path**: /api/builds/<int:pk>/reviews/<int:pk>/

Detailed view of review.

## Edit reviews

- **Method**: `PUT`
- **Path**: /api/builds/<int:pk>/reviews/<int:pk>/

Allow user to edit their review on specific build

## Delete reviews

- **Method**: `DELETE`
- **Path**: /api/builds/<int:pk>/reviews/<int:pk>/

Delete review from specific build.

## List gpu

- **Method**: `GET`
- **Path**: /api/gpus

Input:

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

## List cpu

- **Method**: `GET`
- **Path**: /api/cpus

Input:

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

## List powersupply

- **Method**: `GET`
- **Path**: /api/powersupplies

Input:

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

## List ram

- **Method**: `GET`
- **Path**: /api/ram

Input:

```json
{
    "brand": string,
    "capacity": int,
    "clock_speed": int,
    "speed": int,
    "type": string
}
```

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

## List motherboard

- **Method**: `GET`
- **Path**: /api/motherboards

Input:

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

## List hardrives

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

--(add edit feature for lists?)
