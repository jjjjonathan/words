import { MyContext } from "../../context";
import { BlogModel } from "../models";

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
    "SELECT * FROM blogs WHERE slug=$1",
    [slug]
  );
  // Return null if blog is not found
  if (rows.length === 0) return null;

  // Else format and return first row
  const blog = rows[0];
  return formatBlog(blog);
};

export const getBlogById = async (id: number, context: MyContext) => {
  const { rows } = await context.db.query<BlogModel>(
    "SELECT * FROM blogs WHERE id=$1",
    [id]
  );
  // Return null if blog is not found
  if (rows.length === 0) return null;

  // Else format and return first row
  const blog = rows[0];
  return formatBlog(blog);
};

export const getAllBlogsByUserId = async (id: number, context: MyContext) => {
  const { rows } = await context.db.query<BlogModel>(
    "SELECT * FROM blogs WHERE owner=$1",
    [id]
  );

  // Format all rows
  return rows.map((row) => formatBlog(row));
};
