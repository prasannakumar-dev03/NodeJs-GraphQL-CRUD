const userResolvers = {
  Query: {
    users: async (_, __, { dataSources }) => {
      return await dataSources.users.getUsers();
    },
    user: async (_, { id }, { dataSources }) => {
      return await dataSources.users.getUserById(id);
    }
  },
  Mutation: {
    createUser: async (_, { input }, { dataSources }) => {
      return await dataSources.users.createUser(input);
    },
    updateUser: async (_, { id, input }, { dataSources }) => {
      return await dataSources.users.updateUser(id, input);
    },
    deleteUser: async (_, { id }, { dataSources }) => {
      return await dataSources.users.deleteUser(id);
    }
  }
};

export default userResolvers;