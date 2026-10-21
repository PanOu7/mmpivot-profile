import React from "react";
import { Ping } from "ldrs/react";
import "ldrs/react/Ping.css";

const Loading = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen gap-2">
      <img className=" h-16" src="/images/logo.png" alt="" />
      <Ping size="50" speed="2" color="blue" />
    </div>
  );
};

export default Loading;
