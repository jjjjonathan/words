export const user1 = {
  first_name: "Larry",
  last_name: "Example",
  username: "larryexample",
  password_hash: "examplepassword",
  email: "larry@example.com",
  location: "Los Angeles, CA, USA",
  bio: "My name is Larry and I enjoy biking and making homemade pickles. I blog about beekeeping and religion.",
};

// Stacy does not have a location, bio, or any blogs or posts
export const user2 = {
  first_name: "Stacy",
  last_name: "Example",
  username: "stacyexample",
  password_hash: "examplepassword",
  email: "stacy@example.com",
  location: null,
  bio: null,
};

export const blog1 = {
  owner: 1, // hard-coded to user 1
  title: "Beekeeper's Paradise",
  subtitle: "Everything you wanted to know about saving the bees",
  slug: "beekeepers-paradise",
};

export const blog2 = {
  owner: 1, // hard-coded to user 1
  title: "World religion world",
  subtitle: null,
  slug: "world-religion-world",
};

export const post1 = {
  title: "The wonderful world of beekeeping",
  body: "Lorem ipsum",
  blog: 1, // hard-coded to blog 1
  author: 1, // hard-coded to user 1
  slug: "the-wonderful-world-of-beekeeping",
};
