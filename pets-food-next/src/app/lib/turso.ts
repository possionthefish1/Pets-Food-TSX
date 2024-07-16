import { createClient } from '@libsql/client';
// import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';

// export const client = createClient({
export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// export const db = drizzle(client);
