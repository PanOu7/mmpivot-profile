"use client";

import { cn } from "@/lib/utils";

const Spacer = ({ children, className, ...props }) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

export default Spacer;
