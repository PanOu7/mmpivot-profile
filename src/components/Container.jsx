"use client";

import { cn } from "@/lib/utils";

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "px-5 xl:px-0 w-full  xl:w-[1280px] xxl:w-[1600px] mx-auto ",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
