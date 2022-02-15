import { Pool } from 'pg';
import { user, host, database, password, port } from '../config';

const pool = new Pool({ user, host, database, password, port });

export default pool;
