import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "~/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {

      semantics: {
        primary: "[--semantics-bg:hsl(var(--primary))] [--semantics-fg:hsl(var(--primary-foreground))]",
        secondary: "[--semantics-bg:hsl(var(--secondary))] [--semantics-fg:hsl(var(--secondary-foreground))]",
        accent: "[--semantics-bg:hsl(var(--accent))] [--semantics-fg:hsl(var(--accent-foreground))]",
        destructive: "[--semantics-bg:hsl(var(--destructive))] [--semantics-fg:hsl(var(--destructive-foreground))]",
      },

      variant: {
        block: "bg-[--semantics-bg] text-[--semantics-fg] hover:brightness-95",
        outline: "border border-input border-[--semantics-bg] hover:bg-[--semantics-bg] hover:text-[--semantics-fg]",
        ghost: "hover:bg-[--semantics-bg] hover:text-[--semantics-fg]",
        link: "underline-offset-4 hover:underline text-foreground",
      },
      scale: {
        xs: "h-4 px-1 text-xs rounded-xs",
        sm: "h-6 px-3 text-sm rounded-sm",
        md: "h-8 px-4 text-sm",
        lg: "h-12 px-8 text-md rounded-lg",
      },
    },

    defaultVariants: {
      semantics: "secondary",
      variant: "block",
      scale: "md",
    },
  }
)

export type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>
  & VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, semantics, scale, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, semantics, scale, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
