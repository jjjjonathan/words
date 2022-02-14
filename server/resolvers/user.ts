import { Resolvers } from '../generated/resolvers-types';

const resolvers: Resolvers = {
  Query: {
    user: () => ({
      id: 1,
      firstName: 'Jonny',
      lastName: 'Dog',
      username: 'jonnythedog',
      email: 'example@example.com',
      passwordHash: 'qoiwuehfv9w83b4f9bw8q30834',
      userSince: new Date(),
      location: 'Here',
    }),
  },
};

export default resolvers;
