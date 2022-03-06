import format from 'pg-format';
import db from '..';
import { user1, user2, blog1, post1 } from './test-seed-data';

async function seed() {
  // Test data
  const testUsers = [user1, user2];
  const testBlogs = [blog1];
  const testPosts = [post1];

  // Convert object to array
  const testUsersArrays = testUsers.map(
    ({
      first_name,
      last_name,
      username,
      password_hash,
      email,
      location,
      bio,
    }) => [
      // Array item order must match query column order
      first_name,
      last_name,
      username,
      password_hash,
      email,
      location,
      bio,
    ],
  );

  console.log('Seeding users...');

  // Seed users
  await db.query(
    format(
      'INSERT INTO users (first_name, last_name, username, password_hash, email, location, bio) VALUES %L',
      testUsersArrays,
    ),
  );

  // Convert object to array
  const testBlogsArrays = testBlogs.map(({ owner, title, subtitle, slug }) => [
    // Array item order must match query column order
    owner,
    title,
    subtitle,
    slug,
  ]);

  console.log('Seeding blogs...');

  // Seed blogs
  await db.query(
    format(
      'INSERT INTO blogs (owner, title, subtitle, slug) VALUES %L',
      testBlogsArrays,
    ),
  );

  // Convert object to array
  const testPostsArrays = testPosts.map(({ title, body, blog, author, slug }) =>
    // Array item order must match query column order
    [title, body, blog, author, slug],
  );

  console.log('Seeding posts...');

  // Seed posts
  await db.query(
    format(
      'INSERT INTO posts (title, body, blog, author, slug) VALUES %L',
      testPostsArrays,
    ),
  );

  console.log('Database successfully seeded!');

  // Exit process
  process.exit(0);
}

seed();
