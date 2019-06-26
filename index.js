const Koa = require('koa')

const router = require('./router')
const bodyParser = require('koa-bodyparser')

const { ApolloServer, gql } = require('apollo-server-koa')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = new Koa()

app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)