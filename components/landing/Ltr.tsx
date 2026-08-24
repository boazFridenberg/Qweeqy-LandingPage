import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Ltr({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span dir="ltr" className={cn("inline-block", className)}>
      {children}
    </span>
  );
}
