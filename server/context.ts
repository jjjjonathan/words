import db from "./db";

const context = { db };

export type MyContext = typeof context;

export default context;
