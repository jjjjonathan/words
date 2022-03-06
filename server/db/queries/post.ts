import { MyContext } from '../../context';
import { PostModel } from '../models';

const formatPost = (post: PostModel) => ({
  id: post.id,
  title: post.title,
  body: post.body,
  blog: post.blog,
  author: post.author,
  slug: post.slug,
  createdAt: post.created_at,
  updatedAt: post.updated_at,
});

export type GQLPostModel = ReturnType<typeof formatPost>;

export const getPostBySlug = async (slug: string, context: MyContext) => {
  const { rows } = await context.db.query<PostModel>(
    'SELECT * FROM posts WHERE slug=$1',
    [slug],
  );

  // Return null if post is not found
  if (rows.length === 0) return null;

  // Else format and return first row
  const post = rows[0];
  return formatPost(post);
};

export const getAllPostsByUserId = async (id: number, context: MyContext) => {
  const { rows } = await context.db.query<PostModel>(
    'SELECT * FROM posts WHERE author=$1',
    [id],
  );

  // Format all rows
  return rows.map((row) => formatPost(row));
};
