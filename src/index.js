import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import dotenv from 'dotenv';

// Local imports
import connectDB from './config/db.js';
import typeDefs from './schema/typeDefs.js';
import resolvers from './resolvers/index.js';
import UserDataSource from './datasources/UserDataSource.js';
import errorHandler from './middleware/errorHandler.js';

// Configure environment variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    users: new UserDataSource()
  }),
  formatError: (err) => {
    console.error(err);
    return {
      message: err.message,
      code: err.extensions?.code || 'SERVER_ERROR',
      path: err.path
    };
  }
});

// Start the server
const startServer = async () => {
  await server.start();
  
  // Apply Apollo middleware to Express
  server.applyMiddleware({ app });
  
  // Error handling middleware
  app.use(errorHandler);

  const PORT = process.env.PORT || 4000;
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();