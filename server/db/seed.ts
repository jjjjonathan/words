import db from '.';

async function seed() {
  const res = await db.query(
    'INSERT INTO users (first_name, last_name, username, password_hash, email, created_at, updated_at) VALUES ("Jonny", "Dog", "jonnythedog", "aunfwiouefoijwef", "example@example.com", $1, $2) RETURNING *',
    [new Date(), new Date()],
  );

  console.log(res);
}

seed();
