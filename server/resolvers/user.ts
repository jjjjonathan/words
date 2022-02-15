import { Resolvers } from '../generated/resolverTypes';

const resolvers: Resolvers = {
  Query: {
    user: () => ({
      id: 1,
      firstName: 'Jonny',
      lastName: 'Dog',
      username: 'jonnythedog',
      email: 'example@example.com',
      passwordHash: 'qoiwuehfv9w83b4f9bw8q30834',
      createdAt: new Date(),
      updatedAt: new Date(),
      location: 'Here',
      blogs: [],
    }),
  },
};

export default resolvers;
