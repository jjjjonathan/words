import { getAllBlogsByUserId } from '../db/queries/blog';
import { getUserByUsername } from '../db/queries/user';
import { Resolvers } from '../generated/resolver-types';

const resolvers: Resolvers = {
  Query: {
    user: async (parent, { username }, context) => {
      const user = await getUserByUsername(username, context);
      return user;
    },
  },

  User: {
    blogs: async ({ id }, args, context) => {
      const blogs = await getAllBlogsByUserId(id, context);
      return blogs;
    },
  },
};

export default resolvers;
