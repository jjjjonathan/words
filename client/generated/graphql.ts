/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  DateTime: string;
  EmailAddress: string;
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

export type GetBlogQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetBlogQuery = { __typename?: 'Query', blog?: { __typename?: 'Blog', slug: string, title: string, subtitle?: string | null, owner: { __typename?: 'User', username: string }, posts: Array<{ __typename?: 'Post', title: string, slug: string } | null> } | null };

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, title: string, body: string, slug: string, createdAt: string, updatedAt: string, author: { __typename?: 'User', firstName: string, lastName: string, username: string } } | null };


export const GetBlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlogQuery, GetBlogQueryVariables>;
export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;