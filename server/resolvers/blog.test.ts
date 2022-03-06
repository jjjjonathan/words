import { gql } from 'apollo-server-lambda';
import { server } from '../graphql';
import { blog1, user1 } from '../db/seed/test-seed-data';
import context from '../context';

describe('Blog resolver', () => {
  test('should return valid primitive data with a slug argument', async () => {
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

    const result = await server.executeOperation({ query });
    const blog = result?.data?.blog;

    expect(blog.id).toEqual(1);
    expect(blog.title).toEqual(blog1.title);
    expect(blog.subtitle).toEqual(blog1.subtitle);
    expect(blog.slug).toEqual(blog1.slug);
    expect(blog.createdAt).toEqual(expect.any(Date));
    expect(blog.updatedAt).toEqual(expect.any(Date));
  });

  test('should return a valid user object of primitive data for the blog owner', async () => {
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

    const result = await server.executeOperation({ query });
    const blog = result?.data?.blog;

    expect(blog.owner.id).toEqual(1);
    expect(blog.owner.username).toEqual(user1.username);
    expect(blog.owner.email).toEqual(user1.email);
    expect(blog.owner.createdAt).toEqual(expect.any(Date));
  });

  test('should return null with a non-existent slug', async () => {
    const query = gql`
      {
        blog(slug: "not-a-real-blog") {
          id
          title
        }
      }
    `;

    const result = await server.executeOperation({ query });
    const blog = result?.data?.blog;

    expect(blog).toEqual(null);
    expect(result?.errors).toBe(undefined);
  });

  test.todo('should return an array of blog posts');

  test.todo('should return null with empty nullable fields');
});

afterAll(async () => {
  await context.db.end();
});
