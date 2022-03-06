import { gql } from 'apollo-server-lambda';
import { server } from '../graphql';
import { user1, blog1 } from '../db/seed/test-seed-data';
import context from '../context';

describe('User resolver', () => {
  test('should return valid primitive data with a username argument', async () => {
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

    const result = await server.executeOperation({ query });
    const user = result?.data?.user;

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

  test('should return null with a non-existent username', async () => {
    const query = gql`
      {
        user(username: "notarealuser") {
          id
          username
        }
      }
    `;

    const result = await server.executeOperation({ query });
    const user = result?.data?.user;

    expect(user).toEqual(null);
    expect(result?.errors).toBe(undefined);
  });

  test.todo('should return an array of blog posts');

  test('should return an array of blogs', async () => {
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

    const result = await server.executeOperation({ query });
    const blogs = result?.data?.user.blogs;

    expect(blogs[0].id).toEqual(1);
    expect(blogs[0].title).toEqual(blog1.title);
    expect(blogs[0].subtitle).toEqual(blog1.subtitle);
    expect(blogs[0].slug).toEqual(blog1.slug);
    expect(blogs[0].createdAt).toEqual(expect.any(Date));
    expect(blogs[0].updatedAt).toEqual(expect.any(Date));
  });

  test.todo('should return null with empty nullable fields');

  test.todo('blogs array should be empty if none exist');
});

afterAll(async () => {
  await context.db.end();
});
