import { getBlogBySlug } from '../db/queries/blog';
import { getUserById } from '../db/queries/user';
import { Resolvers } from '../generated/resolver-types';

const resolvers: Resolvers = {
  Query: {
    blog: async (parent, { slug }, context) => {
      const blog = await getBlogBySlug(slug, context);
      return blog;
    },
  },

  Blog: {
    owner: async ({ owner }, args, context) => {
      const user = await getUserById(owner, context);

      if (user === null)
        throw new Error('Blog owner ID does not point to a valid user');

      return user;
    },
  },
};

export default resolvers;
