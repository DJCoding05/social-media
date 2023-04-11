import { SignIn, SignOutButton, SignUp, useUser } from "@clerk/nextjs";

export default function SignInPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b font-sans from-[#2e026d] to-[#15162c]">
        {isSignedIn ? <SignOutButton/> : <SignIn/>}
    </main>
  )
}

SignInPage;