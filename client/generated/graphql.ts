/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
};

export type Blog = Timestamps & {
  __typename?: 'Blog';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  owner: User;
  posts: Array<Maybe<Post>>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPost?: Maybe<Post>;
};


export type MutationAddPostArgs = {
  blogId: Scalars['Int'];
  body: Scalars['String'];
  title: Scalars['String'];
};

export type Post = Timestamps & {
  __typename?: 'Post';
  author: User;
  blog: Blog;
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<Blog>;
  post?: Maybe<Post>;
  user?: Maybe<User>;
};


export type QueryBlogArgs = {
  slug: Scalars['String'];
};


export type QueryPostArgs = {
  slug: Scalars['String'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export type Timestamps = {
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type User = Timestamps & {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']>;
  blogs: Array<Maybe<Blog>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['EmailAddress'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  posts: Array<Maybe<Post>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};
