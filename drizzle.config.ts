import type { Config } from 'drizzle-kit'

const {
  LOCAL_DB_PATH,
  DB_ID,
  D1_TOKEN,
  CF_ACCOUNT_ID = 'accountId',
} = process.env

const schema = './app/db/schema.ts'
const dialect = 'sqlite'

const localConfig = {
  schema,
  dialect,
  dbCredentials: {
    url: LOCAL_DB_PATH!,
  },
} satisfies Config

const productionConfig = {
  schema,
  dialect,
  out: './migrations',
  driver: 'd1-http',
  dbCredentials: {
    databaseId: DB_ID!,
    token: D1_TOKEN!,
    accountId: CF_ACCOUNT_ID!,
  },
} satisfies Config

export default LOCAL_DB_PATH ? localConfig : productionConfig
