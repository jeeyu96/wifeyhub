import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-sky-400 text-white shadow hover:bg-sky-500", // Sky blue for primary
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600", // Red for destructive
        outline:
          "border border-sky-400 text-sky-400 bg-white shadow-sm hover:bg-sky-50", // Outline with sky accents
        secondary:
          "bg-sky-100 text-sky-800 shadow-sm hover:bg-sky-200", // Light sky for secondary
        ghost: "bg-transparent text-sky-400 hover:bg-sky-100", // Transparent with sky accents
        link: "text-sky-400 underline-offset-4 hover:underline", // Sky link style
        transparent: "bg-transparent hover:bg-accent/10 text-accent"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        iconSm: "h-8 w-8"
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
