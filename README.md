# Hasura Auth Server

Hasura setup with custom JWT server using serverless and Typescript

## Get up and running

Make sure you have `docker`, `node` and the [hasura cli](https://docs.hasura.io/1.0/graphql/manual/hasura-cli/install-hasura-cli.html) installed.

start the graphql engine with

```
> npm run hasura:dev
```

start the hasura console:

```
> npm run hasura:console
```

start the auth server with

```
> npm run auth:dev
```

## Endpoints

The auth server has two endpoints

### Signup

```
POST http://localhost:3000/signup
{
  username: string,
  email: string,
  password: string
}

RESPONSE:

{ token: string }
```

This will return a signed JWT that you can use to query the Hasura graphql api with, eg:

```
POST http://localhost:8080/v1/graphql
Authorization: Bearer <your jwt>

{
  query: "{
    query {
      users {
        id,
        email,
        username
      }
    }
  }"
}
```

The graphql contains permissions so the logged in user can only query their own information and not other users

### Login

```
POST http://localhost:3000/login
{
  username: string,
  email: string,
  password: string
}

RESPONSE:

{ token: string }
```

The endpoint will match either the given username or email for that user with the password and return a JWT if a match is found
