import { getAllBlogsByUserId } from '../db/queries/blog';
import { getAllPostsByUserId } from '../db/queries/post';
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

    posts: async ({ id }, args, context) => {
      const posts = await getAllPostsByUserId(id, context);
      return posts;
    },
  },
};

export default resolvers;
