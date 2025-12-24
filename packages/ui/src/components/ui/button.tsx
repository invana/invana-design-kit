import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap \
  rounded-md font-medium transition-colors focus-visible:outline-none \
  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 \
  disabled:pointer-events-none disabled:opacity-50 \
  [&_svg]:pointer-events-none \
  [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow ring-2 ring-primary/40 \
          hover:ring-primary/60 \
          active:bg-primary hover:shadow-lg hover:brightness-110",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm ring-2 ring-destructive/40 \
          hover:ring-destructive/60 \
          active:bg-destructive/70",
        outline:
          "bg-background shadow-sm ring-2 ring-border \
          hover:text-primary hover:ring-primary \
          active:bg-primary",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm ring-2 ring-secondary-foreground/40 \
          hover:ring-primary/60 \
          active:bg-secondary/60",
        ghost:
          "hover:text-primary ring-2 ring-transparent \
          hover:ring-primary \
          active:bg-primary/40 active:text-primary/70 ",
        link:
          "text-primary underline-offset-4 hover:underline \
          hover:text-primary/80 active:text-primary/60",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 py-2 text-sm",
        lg: "h-12 rounded-md px-8 py-3",
        icon: "h-8 w-8 rounded-md",
        "nav-icon": "h-11 w-11 rounded-md",
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
