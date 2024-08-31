import { type MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [{ title: 'Hamza' }]
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Hello, world!</h1>
      <a href="/signup">Sign up</a>
      <a href="/counter">See counter</a>
    </div>
  )
}
