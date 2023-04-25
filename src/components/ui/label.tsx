"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "~/utils/cn"

const labelVariants = cva(
  "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      semantics: {
        primary: "text-primary",
        secondary: "text-primary font-light",
        accent: "text-accent",
        destructive: "text-destructive font-light"
      },
      scale: {
        xs: "text-xs font-light",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-md"
      }
    },
    defaultVariants: {
      semantics: "primary",
      scale: "md"
    }
  }
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>
>(({ className, scale, semantics, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ scale, semantics }), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
