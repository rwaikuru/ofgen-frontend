import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}) {
  return (
    (<form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Welcome Back!</h1>
        <p className="text-balance text-xs text-muted-foreground">
          Please fill in the fields to sign in to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email ID/Username</Label>
          <Input id="email" type="email" placeholder="enter email or username" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required placeholder="**********" />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div
          className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="#4285F4" d="M12 12V7.5h7.3c.2.7.3 1.5.3 2.3 0 5.2-3.5 8.9-8.6 8.9-4.9 0-9-4-9-9s4.1-9 9-9c2.4 0 4.4 1 5.9 2.3l-2.8 2.8C13.5 5.6 12.7 5.3 12 5.3c-3.2 0-5.7 2.7-5.7 5.7s2.5 5.7 5.7 5.7c2.9 0 4.8-1.7 5.2-3.9H12z" />
  </svg>
  Login with Google
</Button>

      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>)
  );
}
