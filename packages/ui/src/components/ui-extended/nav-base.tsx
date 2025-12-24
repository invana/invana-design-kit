import React from 'react';

export interface NavSection {
  content?: React.ReactNode;
  className?: string;
}

export interface BaseNavProps {
  className?: string;
  orientation: 'horizontal' | 'vertical';
  sections: {
    start?: NavSection;
    center?: NavSection;
    end?: NavSection;
  };
}

/**
 * Base navigation component that handles both orientations
 * Use NavHorizontal or NavVertical wrappers for better DX
 */
export const NavBase: React.FC<BaseNavProps> = ({ className = '', orientation, sections }) => {
  const isVertical = orientation === 'vertical';

  const containerClass = isVertical
    ? `flex flex-col items-center h-full ${className}`
    : `flex items-center   w-full ${className}`;

  const sectionWrapperClass = isVertical
    ? 'flex flex-col items-center gap-1'
    : 'flex items-center gap-1 ';

  return (
    <nav className={containerClass}>
      {sections.start?.content && (
        <div className={`${sectionWrapperClass} ${sections.start.className || ''}`}>
          {sections.start.content}
        </div>
      )}

      {sections.center?.content ? (
        <div className={`flex-1 ${isVertical ? '' : 'flex justify-center items-center gap-1'} ${sections.center.className || ''}`}>
          {sections.center.content}
        </div>
      ) : (
        // Empty spacer to push end section to the bottom/right
        <div className="flex-1" />
      )}

      {sections.end?.content && (
        <div className={`${sectionWrapperClass} ${isVertical ? '' : 'ml-auto'} ${sections.end.className || ''}`}>
          {sections.end.content}
        </div>
      )}
    </nav>
  );
};
