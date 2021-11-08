
// modules 
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import database_configs from './configs/databaseConfigs';

// port 
const _PORT = process.env.PORT || 1234;

// Type Defs
import typeDefs from './schema/typeDefs';

// Resolvers
import resolvers from './schema/rootResolver';

// Middleware
import middleware from './middleware/rootMiddleware';

// init new apollo server
const apolloServer = new ApolloServer({
    typeDefs, resolvers, context: middleware
})

// connection to the DB
mongoose.connect(database_configs || `http://localhost:${_PORT}`, async () => {

    const server = express();

    await   apolloServer.start();
            apolloServer.applyMiddleware({ app: server });

    server.listen(_PORT, () => console.log(`🚀 Server is running with no issue. click here to open ->  http://localhost:${_PORT}/graphql`))

})
