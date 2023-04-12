import { SignInButton, useUser, SignOutButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Router, useRouter } from "next/router";

export default function NavBar() {
  const { isLoaded, isSignedIn, user } = useUser();  
  const { push } = useRouter();

  return (
    <div className="navbar bg-black border-b border-neutral-500 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-500 border-r border-b border-neutral-500 w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">Quacker</a>
  </div>
  <div className="navbar-end">
    <h1 className='font-bold'>
        <SignedIn>
            <SignOutButton />
        </SignedIn>
        <SignedOut>
            <SignInButton />
        </SignedOut>
    </h1>
  </div>
</div>
  )
}
