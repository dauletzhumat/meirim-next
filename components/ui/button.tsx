import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border-2 text-[13px] font-bold uppercase tracking-[0.4px] cursor-pointer font-sans transition-all duration-200 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white border-primary hover:bg-primary-hover hover:border-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(113,80,211,0.35)]",
        outline:
          "bg-transparent text-[#111] border-[#111] hover:bg-[#111] hover:text-white hover:-translate-y-0.5",
        white:
          "bg-white text-primary border-white hover:bg-white/90",
      },
      size: {
        default: "px-10 py-4",
        sm: "px-6 py-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
