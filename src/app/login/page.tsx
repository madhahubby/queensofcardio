import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeartPulse } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-15rem)] py-12 px-4 bg-secondary">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <HeartPulse className="mx-auto h-10 w-10 text-primary mb-4" />
          <CardTitle className="text-3xl font-headline">Welcome Back!</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full mt-4">Log In</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-sm gap-4">
            <Link href="#" className="underline text-muted-foreground hover:text-primary">
              Forgot your password?
            </Link>
            <p className="text-center text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="underline text-primary font-semibold hover:text-primary/80">
                Sign up
                </Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
