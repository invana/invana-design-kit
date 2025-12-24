import React from "react"
import { Tooltip, TooltipTrigger, TooltipContent, Separator, Button } from "../ui"
import { NavBase } from './nav-base';
import type { LucideIcon } from "lucide-react"


/**
 * NavVerticalItem - Configuration for a single navigation item
 * 
 * @example
 * ```tsx
 * const items: NavVerticalItem[] = [
 *   { 
 *     name: 'Dashboard', 
 *     icon: Home, 
 *     onClick: () => navigate('/dashboard') 
 *   },
 *   { 
 *     name: 'Settings', 
 *     icon: Settings, 
 *     href: '/settings',
 *     showSeperator: true 
 *   }
 * ];
 * ```
 */
export interface NavVerticalItem {
  /** Optional unique key for React rendering */
  key?: string
  /** Display name shown in tooltip */
  name: string
  /** Navigation URL (for anchor tag) */
  href?: string
  /** Click handler (for button behavior) */
  onClick?: () => void
  /** Additional CSS classes for the item wrapper */
  className?: string;
  /** CSS classes applied when item is active */
  activeClass?: string
  /** CSS classes for the icon */
  iconClassName?: string;
  /** Stroke width for the icon (default: 2) */
  iconStroke?: number;
  /** Tooltip position (default: 'right') */
  tooltipSide?: 'top' | 'right' | 'bottom' | 'left'
  /** Show a separator line after this item */
  showSeperator?: boolean
  /** Lucide icon component */
  icon: React.ElementType | LucideIcon
  /** Custom tooltip content (overrides name) */
  tooltip?: React.ReactNode
}

export interface NavVerticalItemsProps {
  items: NavVerticalItem[]
}

export const NavVerticalItems: React.FC<NavVerticalItemsProps> = ({ items }) => {

  const [activeItem, setActiveItem] = React.useState<null | string>(null)

  return <>{
    items.map((item) => (
      <React.Fragment key={item.name}>
        <Tooltip key={item.name}>
          <TooltipTrigger asChild>
            {item.href ? (
              <a
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={` flex border-0 items-center justify-center 
              transition-colors rounded-md
              hover:text-primary/80 px-2 py-2 ${item.className || ''}
              ${activeItem === item.name ? 'bg-accent text-accent-foreground' : ''}`}
              >
                <item.icon strokeWidth={item.iconStroke ? item.iconStroke : 2} className={item.iconClassName ? item.iconClassName : "w-5 h-5"} />
              </a>
            ) : item.onClick ? (
              <Button
                size="nav-icon"
                variant={"ghost"}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setActiveItem(item.name === activeItem ? null : item.name)
                }}
                className={`${item.className || ''}
          ${activeItem === item.name ? ` ${item?.activeClass || ''}` : ''}`}
              >
                <item.icon strokeWidth={item.iconStroke ? item.iconStroke : 2} className={item.iconClassName ? item.iconClassName : "w-5 h-5"} />
              </Button>
            ) : (
              <div
                className={` flex border-0  items-center justify-center 
          transition-colors  rounded-md  px-2 py-2 ${item.className || ''}
          ${activeItem === item.name ? 'bg-accent text-accent-foreground' : ''}`}
              >
                <item.icon strokeWidth={item.iconStroke ? item.iconStroke : 2} className={item.iconClassName ? item.iconClassName : "w-5 h-5"} />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent side={item.tooltipSide ? item.tooltipSide : 'right'}>
            {item.tooltip || item.name}
          </TooltipContent>
        </Tooltip>
        {item.showSeperator && <Separator />}
      </React.Fragment>

    ))
  }
  </>

}


/**
 * NavVertical - Vertical navigation component for sidebars
 * 
 * @example
 * ```tsx
 * <NavVertical
 *   // Custom content at top (e.g., logo, branding)
 *   top={<div className="p-2"><Logo /></div>}
 *   
 *   // Navigation items with icons, tooltips, and interactions
 *   topNavItems={[
 *     { name: 'Home', icon: Home, onClick: () => navigate('/') },
 *     { name: 'Search', icon: Search, href: '/search' },
 *     { name: 'Settings', icon: Settings, onClick: handleSettings, showSeperator: true }
 *   ]}
 *   
 *   // Content that should be centered/flexible (e.g., notifications, status)
 *   middle={<NotificationBell />}
 *   
 *   // Bottom navigation items
 *   bottomNavItems={[
 *     { name: 'Help', icon: HelpCircle, onClick: openHelp },
 *     { name: 'Profile', icon: User, href: '/profile' }
 *   ]}
 *   
 *   // Custom content at bottom (e.g., user avatar, logout button)
 *   bottom={<UserAvatar />}
 * />
 * ```
 * 
 * @remarks
 * - `top`/`bottom`: For arbitrary React content (logos, avatars, custom JSX)
 * - `topNavItems`/`bottomNavItems`: For navigation items with icons, tooltips, and click handlers
 * - `middle`: Content that fills the flexible space between top and bottom
 * - All props are optional - use only what you need
 */
export interface NavVerticalProps {
  /** Custom content rendered at the very top */
  top?: React.ReactNode;
  /** Navigation items with icons and interactions for the top section */
  topNavItems?: NavVerticalItem[];
  /** Custom content rendered in the flexible middle section */
  middle?: React.ReactNode;
  /** Custom content rendered at the very bottom */
  bottom?: React.ReactNode;
  /** Navigation items with icons and interactions for the bottom section */
  bottomNavItems?: NavVerticalItem[];
  /** Additional CSS classes for the navigation container */
  className?: string;
}


export const NavVertical: React.FC<NavVerticalProps> = ({
  className = '',
  top,
  topNavItems,
  middle,
  bottom,
  bottomNavItems
}) => {
  return (
    <NavBase
      orientation="vertical"
      className={`w-[45px]  h-full  flex flex-col items-center ${className}`}
      sections={{
        start: (top || topNavItems) ? {
          content: (
            <>
              {top}
              {topNavItems && <NavVerticalItems items={topNavItems} />}
            </>
          )
        } : undefined,
        center: middle ? { content: middle } : undefined,
        end: (bottom || bottomNavItems) ? {
          content: (
            <>
              {bottomNavItems && <NavVerticalItems items={bottomNavItems} />}
              {bottom}
            </>
          )
        } : undefined,
      }}
    />
  );
}
