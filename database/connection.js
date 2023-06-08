import * as dotenv from "dotenv";
dotenv.config();

import pkg from "pg";
const { Pool } = pkg;

// console.log(process.env.PGPASSWORD);

export const pool = new Pool({allowExitOnIdle:true});
export default pool;