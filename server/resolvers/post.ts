import { Resolvers } from '../generated/resolver-types';
import { getPostBySlug } from '../db/queries/post';
import { getBlogById } from '../db/queries/blog';

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
  },
};

export default resolvers;
