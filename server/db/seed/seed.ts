import db from '..';
import { createUser, createBlog } from './faker';

async function seed() {
  // Number to seed of each
  const usersSeedCount = 10;
  const blogsSeedCount = 4;
  const postsSeedCount = 4; // per blog

  // Generate fake users
  const fakeUsers = [];
  for (let i = 0; i < usersSeedCount; i += 1) {
    fakeUsers.push(createUser());
  }

  // Seed users and get user IDs

  // Generate fake blogs & assign random user as blog owner

  // const fakeBlogs = [];
  // for (let i = 0; i < blogsSeedCount; i += 1) {

  // }

  console.log('Here are the generated users:');
  console.log(fakeUsers);

  const res = await db.query(
    "INSERT INTO users (first_name, last_name, username, password_hash, email, created_at, updated_at) VALUES ('Jonny', 'Dog', 'jonnythedog', 'examplepassword', 'example@example.com', $1, $2) RETURNING *",
    [new Date(), new Date()],
  );

  console.log(res.rows);
}

seed();
