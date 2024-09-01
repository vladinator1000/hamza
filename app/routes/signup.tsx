import bcrypt from 'bcrypt'
import { Form, Link, useActionData } from '@remix-run/react'
import { ActionFunctionArgs, json, redirect } from '@remix-run/cloudflare'

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

    return redirect('/')
  } catch (error) {
    return json(error)
  }
}

export default function Component() {
  const error = useActionData<typeof action>()

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
            {error ? (
              <Alert variant="destructive">
                <AlertDescription>{JSON.stringify(error)}</AlertDescription>
              </Alert>
            ) : null}

            <Button type="submit" className="w-full">
              Sign Up
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
