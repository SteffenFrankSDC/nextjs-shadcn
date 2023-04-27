import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "~/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {

      semantics: {
        default: "[--semantics-bg:rgb(var(--muted-foreground))] [--semantics-fg:rgb(var(--muted))]",
        primary: "[--semantics-bg:rgb(var(--primary))] [--semantics-fg:rgb(var(--primary-foreground))]",
        secondary: "[--semantics-bg:rgb(var(--secondary))] [--semantics-fg:rgb(var(--secondary-foreground))]",
        accent: "[--semantics-bg:rgb(var(--accent))] [--semantics-fg:rgb(var(--accent-foreground))]",
        destructive: "[--semantics-bg:rgb(var(--destructive))] [--semantics-fg:rgb(var(--destructive-foreground))]",
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
      semantics: "default",
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
