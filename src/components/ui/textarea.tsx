import * as React from "react"

import { cn } from "~/utils/cn"

import { type VariantProps, cva } from "class-variance-authority"

const textareaVariants = cva(
  "flex w-full rounded-md border border-input bg-transparent px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      scale: {
        xs: "text-xs h-12",
        sm: "text-sm h-16",
        md: "text-md h-20",
        lg: "text-lg h-24",
      },
    },
  }
)

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
  & VariantProps<typeof textareaVariants>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, scale, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ scale }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
