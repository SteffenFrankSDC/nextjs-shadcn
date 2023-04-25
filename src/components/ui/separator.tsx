"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "~/utils/cn"
import { type VariantProps, cva } from "class-variance-authority"

const separatorVariants = cva(
  "shrink-0 bg-border",
  {
    variants: {
      orientation: {
        horizontal: "h-[1px] w-full",
        vertical: "w-[1px] h-full"
      },
      scale: {
        xs: "data-[orientation=horizontal]:my-1 data-[orientation=vertical]:mx-1",
        sm: "data-[orientation=horizontal]:my-3 data-[orientation=vertical]:mx-3",
        md: "data-[orientation=horizontal]:my-5 data-[orientation=vertical]:mx-5",
        lg: "data-[orientation=horizontal]:my-10 data-[orientation=vertical]:mx-10",
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
