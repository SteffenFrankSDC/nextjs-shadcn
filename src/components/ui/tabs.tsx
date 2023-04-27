"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "~/utils/cn"
import { type VariantProps, cva } from "class-variance-authority"

const Tabs = ({ className, ...args }: TabsPrimitive.TabsProps) => (
  <TabsPrimitive.Root
    className={cn(
      "flex",
      "data-[orientation=horizontal]:flex-col",
      "data-[orientation=vertical]:flex-row",
      className
    )}
    {...args} /
  >)

const tabsListVariants = cva(
  "inline-flex data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col rounded-md p-1 text-muted-foreground",
  {
    variants: {
      scale: {
        xs: "data-[orientation=horizontal]:h-6 [&>[role=tab]]:text-xs [&>[role=tab]]:py-0",
        sm: "data-[orientation=horizontal]:h-8 [&>[role=tab]]:text-xs ",
        md: "data-[orientation=horizontal]:h-10 [&>[role=tab]]:text-sm",
        lg: "data-[orientation=horizontal]:h-14 [&>[role=tab]]:text-md",
      },
      semantics: {
        default: "[--semantics-color:var(--foreground)]",
        primary: "[--semantics-color:var(--primary)]",
        secondary: "[--semantics-color:var(--secondary)]",
        accent: "[--semantics-color:var(--accent)]",
        destructive: "[--semantics-color:var(--destructive)]",
      },
      variant: {
        border: "[--inactive-color:rgb(var(--semantics-color)/20%)]",
        ghost: "[--inactive-color:transparent]"
      }
    },
    defaultVariants: {
      scale: "md",
      semantics: "default",
      variant: "border"
    },
  }
)

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>
>(({ className, scale, semantics, variant, ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabsListVariants({ scale, semantics, variant }),
        className
      )}
      {...props}
    />
  )
})

TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-muted-foreground/50",
      "data-[state=active]:text-foreground",
      "data-[orientation=horizontal]:whitespace-nowrap data-[orientation=horizontal]:border-b-2 data-[orientation=horizontal]:data-[state=active]:border-b-[color:rgb(var(--semantics-color))] data-[orientation=horizontal]:data-[state=inactive]:border-b-[--inactive-color]",
      "data-[orientation=vertical]:text-left data-[orientation=vertical]:border-l-2 data-[orientation=vertical]:data-[state=active]:border-l-[color:rgb(var(--semantics-color))] data-[orientation=vertical]:data-[state=inactive]:border-l-[--inactive-color]",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
