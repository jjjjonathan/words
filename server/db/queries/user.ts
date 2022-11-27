import { MyContext } from "../../context";
import { UserModel } from "../models";

const formatUser = (user: UserModel) => ({
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
});

export type GQLUserModel = ReturnType<typeof formatUser>;

export const getUserByUsername = async (
  username: string,
  context: MyContext
) => {
  const { rows } = await context.db.query<UserModel>(
    "SELECT * FROM users WHERE username=$1",
    [username]
  );

  // Return null if user is not found
  if (rows.length === 0) return null;

  // Else format and return first row
  const user = rows[0];
  return formatUser(user);
};

export const getUserById = async (id: number, context: MyContext) => {
  const { rows } = await context.db.query<UserModel>(
    "SELECT * FROM users WHERE id=$1",
    [id]
  );

  // Return null if user is not found
  if (rows.length === 0) return null;

  // Else format and return first row
  const user = rows[0];
  return formatUser(user);
};
