import gql from "graphql-tag";
import assert from "node:assert";
import { executeOperation } from "../server";
import { blog1, user1, post1, blog2 } from "../db/seed/test-seed-data";
import context from "../context";
import { Blog } from "../generated/graphql";

describe("Blog resolver", () => {
  test("should return valid primitive data with a slug argument", async () => {
    const query = gql`
      {
        blog(slug: "beekeepers-paradise") {
          id
          title
          subtitle
          slug
          createdAt
          updatedAt
        }
      }
    `;

    const { body } = await executeOperation<{ blog: Blog }>(query);
    assert(body.kind === "single");
    const blog = body.singleResult.data?.blog;
    assert(blog);

    expect(blog.id).toEqual(1);
    expect(blog.title).toEqual(blog1.title);
    expect(blog.subtitle).toEqual(blog1.subtitle);
    expect(blog.slug).toEqual(blog1.slug);
    expect(blog.createdAt).toEqual(expect.any(Date));
    expect(blog.updatedAt).toEqual(expect.any(Date));
  });

  test("should return a valid user object of primitive data for the blog owner", async () => {
    const query = gql`
      {
        blog(slug: "beekeepers-paradise") {
          owner {
            id
            username
            email
            createdAt
          }
        }
      }
    `;

    const { body } = await executeOperation<{ blog: Blog }>(query);
    assert(body.kind === "single");
    const blog = body.singleResult.data?.blog;
    assert(blog);

    expect(blog.owner.id).toEqual(1);
    expect(blog.owner.username).toEqual(user1.username);
    expect(blog.owner.email).toEqual(user1.email);
    expect(blog.owner.createdAt).toEqual(expect.any(Date));
  });

  test("should return null with a non-existent slug", async () => {
    const query = gql`
      {
        blog(slug: "not-a-real-blog") {
          id
          title
        }
      }
    `;

    const { body } = await executeOperation<{ blog: Blog }>(query);
    assert(body.kind === "single");
    const blog = body.singleResult.data?.blog;

    expect(blog).toEqual(null);
    expect(body.singleResult.errors).toBe(undefined);
  });

  test("should return an array of blog posts", async () => {
    const query = gql`
      {
        blog(slug: "beekeepers-paradise") {
          id
          title
          posts {
            id
            title
            body
            updatedAt
          }
        }
      }
    `;

    const { body } = await executeOperation<{ blog: Blog }>(query);
    assert(body.kind === "single");
    const blog = body.singleResult.data?.blog;
    assert(blog);

    expect(blog.id).toEqual(1);
    assert(Array.isArray(blog.posts));
    assert(blog.posts[0]);
    expect(blog.posts.length).toEqual(1);

    expect(blog.posts[0].id).toEqual(1);
    expect(blog.posts[0].title).toEqual(post1.title);
    expect(blog.posts[0].body).toEqual(post1.body);
    expect(blog.posts[0].updatedAt).toEqual(expect.any(Date));
  });

  test("should return null with empty nullable fields", async () => {
    const query = gql`
      {
        blog(slug: "world-religion-world") {
          id
          title
          subtitle
          slug
          createdAt
          updatedAt
        }
      }
    `;

    const { body } = await executeOperation<{ blog: Blog }>(query);
    assert(body.kind === "single");
    const blog = body.singleResult.data?.blog;
    assert(blog);

    expect(blog.id).toEqual(2);
    expect(blog.title).toEqual(blog2.title);
    expect(blog.subtitle).toEqual(null);
    expect(blog.slug).toEqual(blog2.slug);
    expect(blog.createdAt).toEqual(expect.any(Date));
    expect(blog.updatedAt).toEqual(expect.any(Date));
  });
});

afterAll(async () => {
  await context.db.end();
});
