import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "~/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        block: "",
        outline:
          "border border-input",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      semantics: {
        primary: "",
        secondary: "",
        accent: "",
        destructive: "",
      },
      scale: {
        xs: "h-4 px-1 text-xs rounded-xs",
        sm: "h-6 px-3 text-sm rounded-sm",
        md: "h-8 px-4 text-sm",
        lg: "h-12 px-8 text-md rounded-lg",
      },
    },
    compoundVariants: [
      // block variants
      {
        variant: "block", semantics: "primary",
        class: 'bg-primary text-primary-foreground hover:brightness-95'
      },
      {
        variant: "block", semantics: "secondary",
        class: 'bg-secondary text-secondary-foreground hover:brightness-95'
      },
      {
        variant: "block", semantics: "accent",
        class: 'bg-accent text-accent-foreground hover:hover:brightness-95'
      },
      {
        variant: "block", semantics: "destructive",
        class: 'bg-destructive text-destructive-foreground hover:brightness-95'
      },

      // outline variants
      {
        variant: "outline", semantics: "primary",
        class: 'border-primary hover:bg-primary hover:text-primary-foreground'
      },
      {
        variant: "outline", semantics: "secondary",
        class: 'border-secondary hover:bg-secondary hover:text-secondary-foreground'
      },
      {
        variant: "outline", semantics: "accent",
        class: 'border-accent hover:bg-accent hover:text-accent-foreground'
      },
      {
        variant: "outline", semantics: "destructive",
        class: 'border-destructive hover:bg-destructive hover:text-destructive-foreground'
      },

      // ghost variants
      {
        variant: "ghost", semantics: "primary",
        class: 'hover:bg-primary hover:text-primary-foreground'
      },
      {
        variant: "ghost", semantics: "secondary",
        class: 'hover:bg-secondary hover:text-secondary-foreground'
      },
      {
        variant: "ghost", semantics: "accent",
        class: 'hover:bg-accent hover:text-accent-foreground'
      },
      {
        variant: "ghost", semantics: "destructive",
        class: 'hover:bg-destructive hover:text-destructive-foreground'
      },
    ],
    defaultVariants: {
      variant: "block",
      semantics: "primary",
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
