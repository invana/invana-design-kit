import * as React from "react"

import { cn } from "../../lib/utils"

export interface TypographyH3Props
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const TypographyH3 = React.forwardRef<HTMLHeadingElement, TypographyH3Props>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    )
  }
)
TypographyH3.displayName = "TypographyH3"

export { TypographyH3 }
