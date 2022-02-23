import { Resolvers } from '../generated/resolver-types';

const resolvers: Resolvers = {
  Query: {
    user: () => ({
      id: 1,
      firstName: 'Jonny',
      lastName: 'Dog',
      username: 'jonnythedog',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      location: 'Here',
      blogs: [],
      posts: [],
    }),
  },
};

export default resolvers;
