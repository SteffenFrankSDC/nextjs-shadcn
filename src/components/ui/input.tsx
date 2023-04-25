import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils/cn"

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      scale: {
        xs: "h-4 text-xs px-1",
        sm: "h-6 text-sm px-2",
        md: "h-8 text-md px-3",
        lg: "h-12 text-lg px-4"
      }
    },
    defaultVariants: { scale: "md" }
  });

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, scale, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ scale }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
