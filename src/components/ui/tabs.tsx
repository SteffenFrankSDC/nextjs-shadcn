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
  "inline-flex data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col rounded-md bg-muted p-1 text-muted-foreground",
  {
    variants: {
      scale: {
        xs: "data-[orientation=horizontal]:h-6 [&>[role=tab]]:text-xs [&>[role=tab]]:py-0",
        sm: "data-[orientation=horizontal]:h-8 [&>[role=tab]]:text-xs ",
        md: "data-[orientation=horizontal]:h-10 [&>[role=tab]]:text-sm",
        lg: "data-[orientation=horizontal]:h-14 [&>[role=tab]]:text-md",
      },
    },
    defaultVariants: {
      scale: "md",
    },
  }
)

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>
>(({ className, scale, ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabsListVariants({ scale }),
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
      "data-[orientation=horizontal]:whitespace-nowrap",
      "data-[orientation=vertical]:text-left",
      "rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
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
