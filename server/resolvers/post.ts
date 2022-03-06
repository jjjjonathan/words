import { Resolvers } from '../generated/resolver-types';
import { getPostBySlug } from '../db/queries/post';

const resolvers: Resolvers = {
  Query: {
    post: async (parent, { slug }, context) => {
      const post = await getPostBySlug(slug, context);
      return post;
    },
  },
};

export default resolvers;
