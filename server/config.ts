/// <reference types="./declarations" />
import customEnv from "custom-env";

customEnv.env();

const rawPort = process.env.PGPORT;

export const host = process.env.PGHOST;
export const user = process.env.PGUSER;
export const database = process.env.PGDATABASE;
export const password = process.env.PGPASSWORD;
export const port =
  typeof rawPort === "string" ? parseInt(rawPort, 10) : undefined;
