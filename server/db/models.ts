export type UserModel = {
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

export type BlogModel = {
  id: number;
  owner: number;
  title: string;
  subtitle?: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
};
