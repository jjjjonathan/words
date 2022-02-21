import format from 'pg-format';
import type { QueryResult } from 'pg';
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
    ],
  );

  // Seed users and get user IDs
  const userQueryRes: QueryResult<{ id: number }> = await db.query(
    format(
      'INSERT INTO users (first_name, last_name, username, password_hash, email, location, bio) VALUES %L RETURNING id',
      fakeUsersArrays,
    ),
  );

  // Convert result into array of numbers
  const userIDs = userQueryRes.rows.map((row) => row.id);

  // Generate fake blogs & assign random user as blog owner
}

seed();
