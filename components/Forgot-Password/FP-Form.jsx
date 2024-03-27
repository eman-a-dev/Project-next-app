import React from "react";
import Link from "next/link";

function ForgotPasswordForm() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold tracking-widest mt-4">
          Forgot Your password?
        </h1>
        <p className="text-white font-light tracking-widest mt-4">
          We have your back!
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="border-b-2 w-full mx-24 pb-4">
          <input
            type="text"
            className="bg-transparent placeholder:font-light"
            placeholder="Email"
          />
        </div>
      </div>
      <p className="text-center text-white font-extralight text-xs tracking-wider mt-4">
        A link will be send to your email to reset your password
      </p>
      <div className="flex justify-center items-center m-8">
        <Link
          href="/"
          className="text-center text-sm text-[#054857] bg-[#FFA93D] rounded p-2"
        >
          Send Recovery Link
        </Link>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
