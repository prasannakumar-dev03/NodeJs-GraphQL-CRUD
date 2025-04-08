import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    active: Boolean
    createdAt: String
    updatedAt: String
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
    active: Boolean
  }

  input UpdateUserInput {
    name: String
    email: String
    age: Int
    active: Boolean
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): Boolean!
  }
`;

export default typeDefs;