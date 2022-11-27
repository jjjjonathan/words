import pg from "pg";
import { user, host, database, password, port } from "../config";

const pool = new pg.Pool({ user, host, database, password, port });

export default pool;
