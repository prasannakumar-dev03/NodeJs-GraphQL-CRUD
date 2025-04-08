# GraphQL CRUD API

A Node.js CRUD API built with Express.js, Apollo Server, GraphQL, and MongoDB.

## Features

- Full CRUD operations for user management
- GraphQL API with Apollo Server
- MongoDB database with Mongoose ODM
- Proper project structure following best practices

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and configure your environment variables
4. Start the server: `npm start` or `npm run dev` for development

## GraphQL API

The API is accessible at: http://localhost:4000/graphql

### Queries

- `users`: Get all users
- `user(id: ID!)`: Get a single user by ID

### Mutations

- `createUser(input: CreateUserInput!)`: Create a new user
- `updateUser(id: ID!, input: UpdateUserInput!)`: Update an existing user
- `deleteUser(id: ID!)`: Delete a user

## Example Queries

### Get All Users

```graphql
query {
  users {
    id
    name
    email
    age
    active
    createdAt
  }
}
```

### Get User by ID

```graphql
query {
  user(id: "userId") {
    id
    name
    email
    age
    active
  }
}
```

### Create User

```graphql
mutation {
  createUser(input: {
    name: "John Doe"
    email: "john@example.com"
    age: 30
    active: true
  }) {
    id
    name
    email
  }
}
```

### Update User

```graphql
mutation {
  updateUser(
    id: "userId",
    input: {
      name: "Jane Doe"
      age: 31
    }
  ) {
    id
    name
    email
    age
  }
}
```

### Delete User

```graphql
mutation {
  deleteUser(id: "userId")
}
```