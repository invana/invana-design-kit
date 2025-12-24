import * as React from "react"

import { cn } from "../../lib/utils"

export interface TypographyPProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const TypographyP = React.forwardRef<HTMLParagraphElement, TypographyPProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "leading-7 [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    )
  }
)
TypographyP.displayName = "TypographyP"

export { TypographyP }
