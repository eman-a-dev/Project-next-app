import React from "react";
import Image from "next/image";
import Link from "next/link";

function Form() {
  return (
    <div className="flex justify-center items-center ">
      <div className="text-center">
        <h2 className="text-white pt-10 text-2xl">Welcome to AdiSoft</h2>
        <p className="pt-5 tracking-widest font-light text-white ">
          Thank you for choosing us!
        </p>
        <div className="px-10 bg-red-500">
          <div className="flex justify-evenly items-center my-7 gap-7 bg-blue-500">
            <input
              type="text"
              className="outline-none border-b-2 border-[#FFFFFF] font-light text-white text-sm bg-transparent pb-4"
              placeholder="First name"
            />
            <input
              type="text"
              className="outline-none border-b-2 font-light text-white text-sm bg-transparent pb-4"
              placeholder="Last name"
            />
          </div>

          <input
            type="text"
            className=" w-full outline-none border-b-2 font-light text-white text-sm bg-transparent pb-4 "
            placeholder="Email"
          />

          <div className="flex gap-4 mt-7 justify-between items-center border-b-2 pb-4">
            <input
              type="text"
              className=" w-full outline-none font-light text-white text-sm bg-transparent"
              placeholder="Password"
            />
            <Image src="/password.svg" width={20} height={20} alt="join" />
          </div>
          <div className="flex gap-4 mt-7 justify-between items-center border-b-2 pb-4">
            <input
              type="text"
              className=" w-full outline-none font-light text-white text-sm bg-transparent "
              placeholder="Confirm Passsword"
            />
            <Image src="/password.svg" width={20} height={20} alt="join" />
          </div>
        </div>

        <div className="my-9">
          <Link href="/" className=" bg-[#FFA93D] px-5 py-1.5 rounded-lg">
            Sign Up
          </Link>
        </div>

        <div className=" flex justify-center items-center my-4">
          <Link
            href="/"
            className="text-white text-sm font-extralight place-content-center"
          >
            Or Sign Up with
          </Link>
          <Image src="/google.svg" width={40} height={50} alt="join" />
        </div>

        <div className="text-white flex justify-center items-center mt-4 text-sm">
          <p className="font-extralight">Already have an account?</p>
          <Link href="/" className="font-semibold">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
