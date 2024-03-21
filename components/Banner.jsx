import React from "react";
import Image from "next/image";

function banner() {
  return (
    <div className=" w-screen h-screen bg-[url('/image.png')]">
      <div className="w-14 h-14 bg-red-700"></div>
    </div>
  );
}

export default banner;
