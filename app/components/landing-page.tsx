import { Link } from '@remix-run/react'
import { Dumbbell, Users, Calendar, Trophy, CheckCircle } from 'lucide-react'

import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <Link className="flex items-center justify-center" to="#">
            <Dumbbell className="h-6 w-6 mr-2" />
            <span className="font-bold text-xl">Hamza</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#pricing"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Elevate Your Fitness Coaching Business
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl">
                  Streamline your workflow, engage clients, and grow your
                  business with Hamza - the all-in-one platform for fitness
                  professionals.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 mb-2" />
                  <CardTitle>Client Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Easily manage your client roster, track progress, and
                    communicate efficiently.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="w-8 h-8 mb-2" />
                  <CardTitle>Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Streamline your booking process with our intuitive
                    scheduling system.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Trophy className="w-8 h-8 mb-2" />
                  <CardTitle>Performance Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Monitor client progress and celebrate achievements with
                    comprehensive tracking tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-slate-50"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Testimonials
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="mt-4">
                  <p className="text-lg">
                    "Hamza has revolutionized my business. I can focus more on
                    coaching and less on admin work."
                  </p>
                  <p className="mt-2 font-semibold">
                    - Sarah J., Personal Trainer
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-lg">
                    "The client tracking features are game-changing. My clients
                    love seeing their progress!"
                  </p>
                  <p className="mt-2 font-semibold">
                    - Mike T., Fitness Studio Owner
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For individual trainers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$29/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Client management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Basic scheduling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Performance
                      tracking
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$79/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> All Basic
                      features
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Advanced
                      analytics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Team management
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> All Pro features
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Custom
                      integrations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Dedicated support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Ready to Transform Your Coaching Business?
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl">
                  Growing your business with Hamza.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90"
                >
                  Start My Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full border-t">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Hamza. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4"
                to="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                to="#"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
