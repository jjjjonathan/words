import { MyContext } from '../../context';
import { BlogModel } from '../models';

const formatBlog = (blog: BlogModel) => ({
  id: blog.id,
  owner: blog.owner,
  title: blog.title,
  subtitle: blog.subtitle || undefined,
  slug: blog.slug,
  createdAt: blog.created_at,
  updatedAt: blog.updated_at,
  posts: [],
});

export type GQLBlogModel = ReturnType<typeof formatBlog>;

export const getBlogBySlug = async (slug: string, context: MyContext) => {
  const { rows } = await context.db.query<BlogModel>(
    'SELECT * FROM blogs WHERE slug=$1',
    [slug],
  );
  const blog = rows[0];

  return formatBlog(blog);
};
