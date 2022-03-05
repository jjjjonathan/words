import { Resolvers } from '../generated/resolver-types';
import db from '../db';

type UserQueryResult = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  password_hash: string;
  email: string;
  location?: string;
  bio?: string;
  created_at: Date;
  updated_at: Date;
};

const resolvers: Resolvers = {
  Query: {
    user: async (parent, { username }) => {
      const { rows } = await db.query<UserQueryResult>(
        'SELECT * FROM users WHERE username=$1',
        [username],
      );
      const user = rows[0];

      return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username,
        email: user.email,
        location: user.location || undefined,
        bio: user.bio || undefined,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
        blogs: [],
        posts: [],
      };
    },
  },
};

export default resolvers;
