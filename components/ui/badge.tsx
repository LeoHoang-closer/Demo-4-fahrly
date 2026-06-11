import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "destructive"
}

const variantClasses: Record<string, string> = {
  default:     "bg-surface text-muted",
  success:     "bg-success-bg text-success-fg",
  warning:     "bg-warning-bg text-warning-fg",
  destructive: "bg-error-bg text-error-fg",
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
