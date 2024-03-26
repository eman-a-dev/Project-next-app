import React from "react";
import Image from "next/image";
import Link from "next/link";

function SignInForm() {
  return (
    <div >
      <div className="text-center">
        <h1 className="text-white text-2xl tracking-widest pt-3 ">
          Welcome Back Pal!
        </h1>
        <p className="text-white tracking-widest font-light pt-5">
          Glad to have you back
        </p>
      </div>
      <div className="flex justify-center items-center pt-10">
        <form className="w-full mx-24">
          <div className="border-b-2 pb-4">
            <input
              type="text"
              className="outline-none font-light text-white text-sm bg-transparent"
              placeholder="Email"
            />
          </div>

          <div className="flex gap-4 mt-7 justify-between items-center border-b-2 pb-4">
            <input
              type="text"
              className="outline-none font-light text-white text-sm bg-transparent "
              placeholder="Passsword"
            />
            <Image src="/password.svg" width={20} height={20} alt="join" />
          </div>
          <div  className="flex justify-between items-center pt-4">
        <label className="font-extralight text-white text-xs">
        <input type="checkbox" class="mr-2"/>Remember Me
        </label>
        <p className="font-extralight text-white text-xs">Forgot Password</p>
        </div>
        </form>
      </div>
      <div className="grid cols-1">
      <div className="mt-10 text-center">
          <Link href="/" className=" bg-[#FFA93D] px-5 py-1.5 rounded-lg">
            Sign Up
          </Link>
        </div>

        <div className="flex justify-center items-center mt-5">
          <Link
            href="/"
            className="text-white text-sm font-extralight "
          >
            Or Sign Up with
          </Link>
          <Image src="/google.svg" width={40} height={50} alt="join"/>
        </div>

        <div className="text-white flex justify-center items-center text-sm my-3">
          <p className="font-extralight">Create new account?</p>
          <Link href="/" className="font-semibold">
            SIGN UP
          </Link>
        </div>
      </div>
     
    </div>
  );
}

export default SignInForm;
