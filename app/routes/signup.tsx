import bcrypt from 'bcrypt'
import { Form, Link, useActionData, useNavigation } from '@remix-run/react'
import { ActionFunctionArgs, json } from '@remix-run/cloudflare'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Alert, AlertDescription } from '~/components/ui/alert'
import { users } from '../db/schema'
import { parseSignupData } from '../features/user/validateUser'

export async function action(arg: ActionFunctionArgs) {
  const formData = await arg.request.formData()
  const entries = Object.fromEntries(formData)

  try {
    const data = parseSignupData(entries)

    const passwordHash = await bcrypt.hash(data.password, 10)

    await arg.context.db.insert(users).values({
      ...data,
      password: passwordHash,
    })

    return json({ success: true })
  } catch (error) {
    return json({ success: false, error })
  }
}

export default function Component() {
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()

  if (actionData?.success) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Sign Up
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-center">Success! You can now </p>
            <Button asChild className="w-full">
              <Link to="/signin">Sign in</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign Up
          </CardTitle>
          <CardDescription className="text-center">
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="post" className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                name="name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                name="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" required />
            </div>
            {actionData?.error ? (
              <Alert variant="destructive">
                <AlertDescription>{actionData.error.message}</AlertDescription>
              </Alert>
            ) : null}

            <Button
              type="submit"
              className="w-full"
              disabled={navigation.state === 'submitting'}
            >
              {navigation.state === 'submitting' ? 'Loading...' : 'Sign Up'}
            </Button>
          </Form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
