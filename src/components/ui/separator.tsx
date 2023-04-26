"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "~/utils/cn"
import { type VariantProps, cva } from "class-variance-authority"

const separatorVariants = cva(
  "shrink-0 bg-border",
  {
    variants: {
      scale: {
        xs: "[--separator-margin:.25rem] [--separator-stroke-width:1px]",
        sm: "[--separator-margin:.5rem] [--separator-stroke-width:1px]",
        md: "[--separator-margin:.75rem] [--separator-stroke-width:1px]",
        lg: "[--separator-margin:1.25rem] [--separator-stroke-width:2px]",
      },
      orientation: {
        horizontal: "h-[var(--separator-stroke-width)] my-[var(--separator-margin)] w-full",
        vertical: "w-[--separator-stroke-width] mx-[--separator-margin] h-full"
      },

    },
  }
)

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
  & VariantProps<typeof separatorVariants>
>(
  (
    { className, orientation = "horizontal", scale = "md", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants({ orientation, scale }),
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
