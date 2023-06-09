"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "~/utils/cn"
import { type VariantProps, cva } from "class-variance-authority"

const avatarVariants = cva("relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      scale: {
        xs: "h-4 w-4",
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-12 w-12"
      }
    },
    defaultVariants: { scale: "md" }
  });

export type AvatarProps =
  React.ForwardRefExoticComponent<AvatarPrimitive.AvatarProps
    & React.RefAttributes<HTMLSpanElement>
    & VariantProps<typeof avatarVariants>>

const Avatar = React.forwardRef<
  React.ElementRef<AvatarProps>,
  React.ComponentPropsWithoutRef<AvatarProps>>
  (({ className, scale, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ scale }),
        className
      )}
      {...props}
    />
  ))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
