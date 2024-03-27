import React from "react";
import Image from "next/image";
import OtpCodeForm from "./Otp-Code-Form";

function OtpCodeBanner() {
  return (
    <div className="w-screen h-screen bg-cover bg-no-repeat md:bg-[url('/image.png')] bg-[#054857] overflow-hidden ">
      <div className=" flex flex-col md:flex-row w-full h-full bg-gradient-to-b from-[#054857D9] to-[#014B5B80] ">
        <div className="lg:w-[42%] h-screen md:h-full bg-[#054857] w-full">
          <div className="flex justify-center items-center mt-24">
            <Image src="/adisoft.svg" width={150} height={150} alt="join" />
          </div>
          <OtpCodeForm />
        </div>
        <div className="md:w-[58%] md:h-full flex relative ">
          <Image
            src="/otpcode.svg"
            width={600}
            height={609}
            alt="join"
            className="md:absolute bottom-0 md:-left-[400px] md:px-0 md:pt-0 lg:-left-10"
          />
        </div>
      </div>
    </div>
  );
}

export default OtpCodeBanner;
