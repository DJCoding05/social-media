import { SignIn, SignOutButton, useUser } from "@clerk/nextjs";
import NavBar from "~/utils/NavBar";

export default function SignInPage() {
  const { isSignedIn } = useUser();

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b font-sans bg-black">
          {isSignedIn ? <SignOutButton/> : <SignIn/>}
      </main>
    </>
  )
}

SignInPage;