const { buildSchema } = require('graphql');

// Define o schema GraphQL
const schema = buildSchema(`
  type Task {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    getTasks: [Task]
    getTask(id: ID!): Task
  }

  type Mutation {
    addTask(title: String!): Task
    updateTask(id: ID!, title: String, completed: Boolean): Task
    deleteTask(id: ID!): String
  }
`);

module.exports = { schema };
