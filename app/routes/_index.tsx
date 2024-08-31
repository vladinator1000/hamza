import { type MetaFunction } from '@remix-run/cloudflare'
import { LandingPage } from '~/components/landing-page'

export const meta: MetaFunction = () => {
  return [{ title: 'Hamza' }]
}

export default function Index() {
  return <LandingPage />
}
