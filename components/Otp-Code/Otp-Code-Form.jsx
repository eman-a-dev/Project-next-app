import React from "react";
import Link from "next/link";

function OtpCodeForm() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold tracking-widest mt-4">
          Check Your Email
        </h1>
        <p className="text-white text-sm font-light tracking-widest mt-4">
          We just sent a recovery code
        </p>
      </div>
      <div className="flex justify-evenly items-center my-7 md:mx-36">
        <input
          type="text"
          className="text-center border-b-2 w-10 h-10 bg-transparent outline-none text-white text-xl"
        />
        <input
          type="text"
          className="text-center border-b-2 w-10 h-10 bg-transparent outline-none text-white text-xl"
        />
        <input
          type="text"
          className="text-center border-b-2 w-10 h-10 bg-transparent outline-none text-white text-xl"
        />
        <input
          type="text"
          className="text-center border-b-2 w-10 h-10 bg-transparent outline-none text-white text-xl"
        />
      </div>
      <p className="text-center text-white font-extralight text-sm tracking-wider my-10">
        00 : 34
      </p>
      <div className="text-white flex justify-center items-center mt-4 text-sm">
        <p className="font-extralight">Didn't you get a code?</p>
        <Link href="/" className="font-semibold">
          Resend
        </Link>
      </div>
      <div className="flex justify-center items-center m-8">
        <Link
          href="/"
          className="text-center text-sm text-[#054857] bg-[#FFA93D] rounded p-2"
        >
          Recover Account
        </Link>
      </div>
    </div>
  );
}

export default OtpCodeForm;
