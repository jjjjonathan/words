import gql from "graphql-tag";
import assert from "node:assert";
import { executeOperation } from "../server";
import { post1, blog1, user1 } from "../db/seed/test-seed-data";
import context from "../context";
import { Post } from "../generated/graphql";

describe("Post resolver", () => {
  test("should return valid primitive data with a slug argument", async () => {
    const query = gql`
      {
        post(slug: "the-wonderful-world-of-beekeeping") {
          id
          title
          body
          slug
          createdAt
          updatedAt
        }
      }
    `;

    const { body } = await executeOperation<{ post: Post }>(query);
    assert(body.kind === "single");
    const post = body.singleResult.data?.post;
    assert(post);

    expect(post.id).toEqual(1);
    expect(post.title).toEqual(post1.title);
    expect(post.body).toEqual(post1.body);
    expect(post.slug).toEqual(post1.slug);
    expect(post.createdAt).toEqual(expect.any(Date));
    expect(post.updatedAt).toEqual(expect.any(Date));
  });

  test("should contain a valid blog object of primitive data for the parent blog", async () => {
    const query = gql`
      {
        post(slug: "the-wonderful-world-of-beekeeping") {
          id
          title
          blog {
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

    const { body } = await executeOperation<{ post: Post }>(query);
    assert(body.kind === "single");
    const post = body.singleResult.data?.post;
    assert(post);

    expect(post.id).toEqual(1);
    expect(post.title).toEqual(post1.title);
    expect(post.blog.id).toEqual(1);
    expect(post.blog.title).toEqual(blog1.title);
    expect(post.blog.subtitle).toEqual(blog1.subtitle);
    expect(post.blog.slug).toEqual(blog1.slug);
    expect(post.blog.createdAt).toEqual(expect.any(Date));
    expect(post.blog.updatedAt).toEqual(expect.any(Date));
  });

  test("should return a valid user object of primitive data for the post author", async () => {
    const query = gql`
      {
        post(slug: "the-wonderful-world-of-beekeeping") {
          id
          title
          author {
            id
            firstName
            lastName
            username
            updatedAt
          }
        }
      }
    `;

    const { body } = await executeOperation<{ post: Post }>(query);
    assert(body.kind === "single");
    const post = body.singleResult.data?.post;
    assert(post);

    expect(post.id).toEqual(1);
    expect(post.title).toEqual(post1.title);
    expect(post.author.id).toEqual(1);
    expect(post.author.firstName).toEqual(user1.first_name);
    expect(post.author.lastName).toEqual(user1.last_name);
    expect(post.author.username).toEqual(user1.username);
    expect(post.author.updatedAt).toEqual(expect.any(Date));
  });

  test("should return null with a non-existent slug", async () => {
    const query = gql`
      {
        post(slug: "not-a-real-post") {
          id
          title
        }
      }
    `;

    const { body } = await executeOperation<{ post: Post }>(query);
    assert(body.kind === "single");
    const post = body.singleResult.data?.post;

    expect(post).toEqual(null);
    expect(body.singleResult.errors).toBe(undefined);
  });
});

afterAll(async () => {
  await context.db.end();
});
