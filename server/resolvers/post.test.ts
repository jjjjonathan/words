import { gql } from 'apollo-server-lambda';
import { server } from '../graphql';
import { post1 } from '../db/seed/test-seed-data';
import context from '../context';

describe('Post resolver', () => {
  test('should return valid primitive data with a slug argument', async () => {
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

    const result = await server.executeOperation({ query });
    const post = result?.data?.post;

    expect(post.id).toEqual(1);
    expect(post.title).toEqual(post1.title);
    expect(post.body).toEqual(post1.body);
    expect(post.slug).toEqual(post1.slug);
    expect(post.createdAt).toEqual(expect.any(Date));
    expect(post.updatedAt).toEqual(expect.any(Date));
  });

  test.todo(
    'should contain a valid blog object of primitive data for the parent blog',
  );

  test.todo(
    'should return a valid user object of primitive data for the post author',
  );

  test('should return null with a non-existent slug', async () => {
    const query = gql`
      {
        post(slug: "not-a-real-post") {
          id
          title
        }
      }
    `;

    const result = await server.executeOperation({ query });
    const post = result?.data?.post;

    expect(post).toEqual(null);
    expect(result?.errors).toBe(undefined);
  });
});

afterAll(async () => {
  await context.db.end();
});
