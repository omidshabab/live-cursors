import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-[12px] sm:text-[16px] sm:text-[16px] font-medium ring-offset-background transition-colors transition duration-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-text hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "text-text border-[1px] border-primary/5 hover:bg-primary/[3%] focus:bg-primary/[3%]",
        secondary:
          "bg-primary/5 hover:bg-primary/10 text-text",
        ghost: "hover:bg-primary/5 hover:text-accent-foreground",
        link: "text-primary hover:text-text",
      },
      size: {
        default: "py-[8px] px-[10px] sm:py-[8px] sm:px-[15px]",
        sm: "py-[8px] px-[10px] sm:py-[8px] sm:px-[15px] text-[12px] sm:text-[15px]",
        lg: "text-[16px] sm:text-[20px] rounded-[12px] py-[12px] px-[15] sm:py-[15px] sm:px-[18px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
