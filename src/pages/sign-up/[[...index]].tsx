import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="flex flex-row justify-center w-full h-[100vh]">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);

export default SignUpPage;


