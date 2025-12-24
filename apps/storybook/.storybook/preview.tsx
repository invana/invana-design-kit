import React, { useEffect } from "react";
import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";
import { 
  themes, 
  applyTheme,
} from "@invana/styling/themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    docs: {
      // disable: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Select theme style',
      defaultValue: themes[0].id,
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: themes.map(theme => ({
          value: theme.id,
          title: theme.name,
          icon: 'paintbrush',
        })),
        dynamicTitle: true,
      },
    },
    variant: {
      description: 'Select theme variant (light/dark/system)',
      defaultValue: 'system',
      toolbar: {
        title: 'Variant',
        icon: 'circle',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'system', title: 'System', icon: 'circle' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeId = context.globals.theme || themes[0].id;
      const variant = context.globals.variant || 'system';
      const themeVariantId = `${themeId}-${variant}`;
      console.log('Preview decorator:', { themeId, variant, themeVariantId, globals: context.globals });
      // Apply theme when globals change
      useEffect(() => {
        console.log('Applying theme:', themeVariantId);
        applyTheme(themeVariantId);
      }, [themeVariantId]);

      return (
        <Story />
      );
    },
  ],
};

export default preview;