import * as React from "react"

import { cn } from "../../lib/utils"

export interface TypographyH5Props
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const TypographyH5 = React.forwardRef<HTMLHeadingElement, TypographyH5Props>(
  ({ className, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        className={cn(
          "scroll-m-20 text-lg font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    )
  }
)
TypographyH5.displayName = "TypographyH5"

export { TypographyH5 }
