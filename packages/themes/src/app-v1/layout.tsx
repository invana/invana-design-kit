import React from 'react';
import { AppLayoutBase } from '../app-base';
import { 
  NavVertical, 
  type NavVerticalProps, 
  type NavHorizontalProps }
from "@invana/ui";

export interface AppLayoutV1Props {  
  leftNav: NavVerticalProps
  className?: string;
  header: NavHorizontalProps;
  main: React.ReactNode
  mainClassName?: string
  footer: NavHorizontalProps
}

export const AppLayoutV1: React.FC<AppLayoutV1Props> = (props) => {
  return (
    <AppLayoutBase
      header={props.header}
      mainClassName={props.mainClassName}
      main={
        <div className="relative h-full flex flex-1">
          <NavVertical 
            className={`border-r bg-card text-card-foreground ${props.leftNav.className}`} 
            top={props.leftNav.top}
            topNavItems={props.leftNav.topNavItems}
            middle={props.leftNav.middle}
            bottom={props.leftNav.bottom}
            bottomNavItems={props.leftNav.bottomNavItems}
          />
          <main className="w-full">
            {props.main}
          </main>
        </div>
      }
      footer={props.footer}
    />
  );
};
