import React from "react";
import Link from "next/link";
import Image from "next/image";

function RecoverPasswordForm() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold tracking-widest mt-4">
          Reset Your password?
        </h1>
        <div className="flex justify-center items-center md:mx-28">
          <p className="text-white text-xs font-extralight mt-4">
            Here's a tip: Use a combination of numbers, uppercase, lowercase and
            special characters
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center gap-4 mt-8 md:mx-24 mx-10 border-b-2 pb-2">
          <input
            type="text"
            className=" w-full outline-none font-light text-white text-sm bg-transparent"
            placeholder="Password"
          />
          <Image src="/password.svg" width={20} height={20} alt="join" />
        </div>
        <div className="flex justify-between items-center gap-4 mt-8 md:mx-24 mx-10 border-b-2 pb-2">
          <input
            type="text"
            className=" w-full outline-none font-light text-white text-sm bg-transparent "
            placeholder="Confirm Passsword"
          />
          <Image src="/password.svg" width={20} height={20} alt="join" />
        </div>
      </div>

      <div className="flex justify-center items-center m-8">
        <Link
          href="/"
          className="text-center text-sm text-[#054857] bg-[#FFA93D] rounded p-2"
        >
          Reset Password
        </Link>
      </div>
    </div>
  );
}

export default RecoverPasswordForm;
