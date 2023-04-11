import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <SignUp path="/sign-in" routing="path" />
);

export default SignUpPage;