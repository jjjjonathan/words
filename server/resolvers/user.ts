import { getUserByUsername } from '../db/queries/user';
import { Resolvers } from '../generated/resolver-types';

const resolvers: Resolvers = {
  Query: {
    user: async (parent, { username }, context) => {
      const user = await getUserByUsername(username, context);
      return user;
    },
  },
};

export default resolvers;
