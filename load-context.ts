import { AppLoadContext } from '@remix-run/cloudflare'
import { type PlatformProxy } from 'wrangler'

import { DatabaseClient, createDbClient } from './app/db/dbClient.server'

type Cloudflare = Omit<PlatformProxy<Env>, 'dispose'>

type RawArg = {
  request: Request
  context: {
    cloudflare: Cloudflare
  }
}

declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    cloudflare: Cloudflare
    db: DatabaseClient
  }
}

export async function getLoadContext({
  context,
}: RawArg): Promise<AppLoadContext> {
  const db = createDbClient(context.cloudflare.env.DB)

  return { ...context, db }
}
