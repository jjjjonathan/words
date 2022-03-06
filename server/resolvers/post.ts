import { Resolvers } from '../generated/resolver-types';
import { getPostBySlug } from '../db/queries/post';
import { getBlogById } from '../db/queries/blog';
import { getUserById } from '../db/queries/user';

const resolvers: Resolvers = {
  Query: {
    post: async (parent, { slug }, context) => {
      const post = await getPostBySlug(slug, context);
      return post;
    },
  },

  Post: {
    blog: async ({ blog: blogId }, args, context) => {
      const blog = await getBlogById(blogId, context);

      if (blog === null)
        throw new Error('Parent blog ID does not point to a valid blog');

      return blog;
    },

    author: async ({ author }, args, context) => {
      const user = await getUserById(author, context);

      if (user === null)
        throw new Error('Post author ID does not point to a valid user');

      return user;
    },
  },
};

export default resolvers;
