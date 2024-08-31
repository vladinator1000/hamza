import { $ } from 'zx'

/**
 * Reset the local d1 database violently.
 * Run any migrations and seed.
 */

await $`rm -rf ./.wrangler`

// Create db.
// https://github.com/cloudflare/workers-sdk/issues/5092
await $`npx wrangler d1 execute db --local --command "pragma foreign_keys = ON;"`

await $`npm run db-migrate-gen`
await $`npm run db-migrate-apply`
// await $`npm run db-seed`
