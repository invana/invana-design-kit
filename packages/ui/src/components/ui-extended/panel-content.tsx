
import { Button } from "../ui/button"
import { X } from "lucide-react"
import React from "react"
import { 
  Card, CardHeader, CardContent, 
  CardFooter, ErrorBoundary
 } from "@invana/ui"


export interface PanelContentProps {
  title?: React.ReactNode
  titleText?: string
  children?: React.ReactNode
  headerClassName?: string
  bodyClassName?: string
  footerContent?: React.ReactNode
  footerClassName?: string
  onClose?: () => void
  showClose?: boolean
  closeIcon?: React.ReactNode
}

export function PanelContent({ title, titleText, children, onClose, showClose,
  headerClassName, bodyClassName, footerContent, footerClassName, closeIcon }: PanelContentProps) {
  return (
    <ErrorBoundary>
      <Card className={`h-full border-none ${headerClassName}`}>
        <CardHeader className="relative flex flex-row items-center py-0 border-b h-[30px]">
          {title && <span className="leading-none font-bold ">{title}</span>}
          {titleText && <h4 className="font-bold leading-none">{titleText}</h4>}
          {showClose && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-[0px] right-[5px] h-6 w-6 hover:bg-transparent hover:text-primary/80"
              onClick={onClose}
            >
              {closeIcon ? closeIcon : <X className="h-3 w-3" />}
              <span className="sr-only">Close panel</span>
            </Button>
          )}
        </CardHeader>
        <CardContent className={`overflow-y-auto h-full ${bodyClassName}`}>
          {children}
        </CardContent>
        {footerContent ?
          <CardFooter className={footerClassName}>
            {footerContent}
          </CardFooter>
          : <></>}
      </Card>
    </ErrorBoundary>
  )
}

