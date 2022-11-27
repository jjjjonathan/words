import format from "pg-format";
import type { QueryResult } from "pg";
import db from "..";
import { createUser, createBlog, createPost } from "./faker";

async function seed() {
  // Number to seed of each
  const usersSeedCount = 10;
  const blogsSeedCount = 4;
  const postsSeedCount = 12;

  // Generate fake users
  const fakeUsers = [];
  for (let i = 0; i < usersSeedCount; i += 1) {
    fakeUsers.push(createUser());
  }

  // Convert object to array
  const fakeUsersArrays = fakeUsers.map(
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
    ]
  );

  console.log("Seeding users...");

  // Seed users and get user IDs
  const userQueryRes: QueryResult<{ id: number }> = await db.query(
    format(
      "INSERT INTO users (first_name, last_name, username, password_hash, email, location, bio) VALUES %L RETURNING id",
      fakeUsersArrays
    )
  );

  // Convert result into array of numbers
  const userIDs = userQueryRes.rows.map((row) => row.id);

  // Generate fake blogs
  const fakeBlogs = [];
  for (let i = 0; i < blogsSeedCount; i += 1) {
    fakeBlogs.push(createBlog());
  }

  // Get random user ID from array of ids
  const getRandomUserID = () => {
    const idIndex = Math.floor(Math.random() * usersSeedCount);
    return userIDs[idIndex];
  };

  // Convert object to array & assign random user as blog owner
  const fakeBlogsArrays = fakeBlogs.map(({ title, subtitle, slug }) => [
    // Array item order must match query column order
    getRandomUserID(),
    title,
    subtitle,
    slug,
  ]);

  console.log("Seeding blogs...");

  // Seed blogs and get blog IDs with owners
  const blogQueryRes: QueryResult<{ id: number; owner: number }> =
    await db.query(
      format(
        "INSERT INTO blogs (owner, title, subtitle, slug) VALUES %L RETURNING id, owner",
        fakeBlogsArrays
      )
    );

  // Generate fake posts
  const fakePosts = [];
  for (let i = 0; i < postsSeedCount; i += 1) {
    fakePosts.push(createPost());
  }

  // Get random user and blog
  const getRandomUserAndBlog = () => {
    const arrIndex = Math.floor(Math.random() * blogsSeedCount);

    const randomUser = blogQueryRes.rows[arrIndex].owner;
    const randomBlog = blogQueryRes.rows[arrIndex].id;

    return { randomUser, randomBlog };
  };

  // Convert object to array & assign random author & parent blog
  const fakePostsArrays = fakePosts.map(({ title, body, slug }) => {
    const { randomUser, randomBlog } = getRandomUserAndBlog();
    // Array item order must match query column order
    return [title, body, randomBlog, randomUser, slug];
  });

  console.log("Seeding posts...");

  // Seed posts
  await db.query(
    format(
      "INSERT INTO posts (title, body, blog, author, slug) VALUES %L",
      fakePostsArrays
    )
  );

  console.log("Database successfully seeded!");

  // Exit process
  process.exit(0);
}

seed();
