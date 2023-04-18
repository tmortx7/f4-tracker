import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex flex-row justify-center w-full h-[100vh]">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);

export default SignInPage;


