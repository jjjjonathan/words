import gql from "graphql-tag";
import assert from "node:assert";
import { executeOperation } from "../server";
import { user1, user2, blog1, post1 } from "../db/seed/test-seed-data";
import context from "../context";
import { User } from "../generated/graphql";

describe("User resolver", () => {
  test("should return valid primitive data with a username argument", async () => {
    const query = gql`
      {
        user(username: "larryexample") {
          id
          firstName
          lastName
          username
          email
          location
          bio
          createdAt
          updatedAt
        }
      }
    `;

    const { body } = await executeOperation<{ user: User }>(query);
    assert(body.kind === "single");
    const user = body.singleResult.data?.user;
    assert(user);

    expect(user.id).toEqual(1);
    expect(user.firstName).toEqual(user1.first_name);
    expect(user.lastName).toEqual(user1.last_name);
    expect(user.username).toEqual(user1.username);
    expect(user.email).toEqual(user1.email);
    expect(user.location).toEqual(user1.location);
    expect(user.bio).toEqual(user1.bio);
    expect(user.createdAt).toEqual(expect.any(Date));
    expect(user.updatedAt).toEqual(expect.any(Date));
  });

  test("should return null with a non-existent username", async () => {
    const query = gql`
      {
        user(username: "notarealuser") {
          id
          username
        }
      }
    `;

    const { body } = await executeOperation<{ user: User }>(query);
    assert(body.kind === "single");
    const user = body.singleResult.data?.user;

    expect(user).toEqual(null);
    expect(body.singleResult.errors).toBe(undefined);
  });

  test("should return an array of blog posts", async () => {
    const query = gql`
      {
        user(username: "larryexample") {
          id
          username
          posts {
            id
            title
            body
            slug
            createdAt
            updatedAt
          }
        }
      }
    `;

    const { body } = await executeOperation<{ user: User }>(query);
    assert(body.kind === "single");
    const posts = body.singleResult.data?.user.posts;
    assert(posts);

    assert(Array.isArray(posts));
    assert(posts[0]);
    expect(posts.length).toEqual(1);

    expect(posts[0].id).toEqual(1);
    expect(posts[0].title).toEqual(post1.title);
    expect(posts[0].body).toEqual(post1.body);
    expect(posts[0].slug).toEqual(post1.slug);
    expect(posts[0].createdAt).toEqual(expect.any(Date));
    expect(posts[0].updatedAt).toEqual(expect.any(Date));
  });

  test("should return an array of blogs", async () => {
    const query = gql`
      {
        user(username: "larryexample") {
          id
          username
          blogs {
            id
            title
            subtitle
            slug
            createdAt
            updatedAt
          }
        }
      }
    `;

    const { body } = await executeOperation<{ user: User }>(query);
    assert(body.kind === "single");
    const blogs = body.singleResult.data?.user.blogs;
    assert(blogs);

    assert(Array.isArray(blogs));
    assert(blogs[0]);
    expect(blogs.length).toEqual(2);

    expect(blogs[0].id).toEqual(1);
    expect(blogs[0].title).toEqual(blog1.title);
    expect(blogs[0].subtitle).toEqual(blog1.subtitle);
    expect(blogs[0].slug).toEqual(blog1.slug);
    expect(blogs[0].createdAt).toEqual(expect.any(Date));
    expect(blogs[0].updatedAt).toEqual(expect.any(Date));
  });

  test("should return null with empty nullable fields", async () => {
    const query = gql`
      {
        user(username: "stacyexample") {
          id
          firstName
          location
          bio
        }
      }
    `;

    const { body } = await executeOperation<{ user: User }>(query);
    assert(body.kind === "single");
    const user = body.singleResult.data?.user;
    assert(user);

    expect(user.id).toEqual(2);
    expect(user.firstName).toEqual(user2.first_name);
    expect(user.location).toEqual(null);
    expect(user.bio).toEqual(null);
  });

  test("blogs and posts arrays should be empty if none exist", async () => {
    const query = gql`
      {
        user(username: "stacyexample") {
          id
          username
          blogs {
            id
            title
          }
          posts {
            id
            slug
          }
        }
      }
    `;

    const { body } = await executeOperation<{ user: User }>(query);
    assert(body.kind === "single");
    const user = body.singleResult.data?.user;
    assert(user);

    expect(user.id).toEqual(2);
    expect(user.blogs.length).toEqual(0);
    expect(user.posts.length).toEqual(0);
  });
});

afterAll(async () => {
  await context.db.end();
});
