import { Resolvers } from '../generated/resolver-types';

type BlogQueryResult = {
  id: number;
  owner: number;
  title: string;
  subtitle?: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
};

const resolvers: Resolvers = {
  Query: {
    blog: async (parent, { slug }, { db }) => {
      const { rows } = await db.query<BlogQueryResult>(
        'SELECT * FROM blogs WHERE slug=$1',
        [slug],
      );
      const blog = rows[0];

      return {
        id: blog.id,
        owner: blog.owner,
        title: blog.title,
        subtitle: blog.subtitle || undefined,
        slug: blog.slug,
        createdAt: blog.created_at,
        updatedAt: blog.updated_at,
        posts: [],
      };
    },
  },
};

export default resolvers;
