// Import is a devDependency. This file is only run in dev
/* eslint-disable import/no-extraneous-dependencies */
import { faker } from "@faker-js/faker";

export function createUser() {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    username: faker.fake("{{word.adjective}}{{word.noun}}"),
    password_hash: faker.random.alphaNumeric(16),
    email: faker.internet.email(),
    location: faker.address.city(),
    bio: faker.fake(
      "I am a {{word.adjective}} {{word.noun}}. In my free time I {{word.adverb}} {{word.verb}}. {{word.interjection}}!"
    ),
  };
}

export function createBlog() {
  const title = faker.fake("{{word.adverb}} {{word.adjective}} {{word.noun}}");
  return {
    title,
    subtitle: faker.fake("Your destination for {{animal.cat}} content"),
    slug: faker.helpers.slugify(title),
  };
}

export function createPost() {
  const title = faker.random.words(5);
  return {
    title,
    body: faker.lorem.paragraphs(5),
    slug: faker.helpers.slugify(title),
  };
}
