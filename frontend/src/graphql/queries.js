/* eslint-disable */
// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const getUser = /* GraphQL */ gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      dob
      address
      description
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ gql`
  query ListUsers(
    $filter: TableUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        dob
        address
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
