import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className=" flex justify-center text-center min-h-screen items-center">
        <SignIn />
    </div>
  )
}