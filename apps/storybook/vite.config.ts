import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // UI package internal imports - these take priority
      // {
      //   find: /^@\/components\/ui\/(.*)$/,
      //   replacement: path.resolve(__dirname, '../../packages/ui/src/components/ui/$1')
      // },
      // {
      //   find: /^@\/lib\/(.*)$/,
      //   replacement: path.resolve(__dirname, '../../packages/ui/src/lib/$1')
      // },
      // {
      //   find: /^@\/hooks\/(.*)$/,
      //   replacement: path.resolve(__dirname, '../../packages/ui/src/hooks/$1')
      // },
      // // Storybook's own @ alias
      // {
      //   find: /^@\/(.*)$/,
      //   replacement: path.resolve(__dirname, './src/$1')
      // },
      // // Package aliases
      // {
      //   find: '@invana/ui',
      //   replacement: path.resolve(__dirname, '../../packages/ui/src')
      // },
      // {
      //   find: '@invana/styling',
      //   replacement: path.resolve(__dirname, '../../packages/styling/src')
      // },
      // {
      //   find: '@invana/themes',
      //   replacement: path.resolve(__dirname, '../../packages/themes/src')
      // },

      '@/components': resolve(__dirname, '../../packages/ui/src/components'),
      '@/lib': resolve(__dirname, '../../packages/ui/src/lib'),
      '@/hooks': resolve(__dirname, '../../packages/ui/src/hooks'),
      '@/styles': resolve(__dirname, '../../packages/ui/src/styles'),
      '@': resolve(__dirname, '../src'),
      '@invana/ui': resolve(__dirname, '../../packages/ui/src'),
      '@invana/ui/*': resolve(__dirname, '../../packages/ui/src/*'),
      '@invana/styling': resolve(__dirname, '../../packages/styling/src'),
      '@invana/styling/*': resolve(__dirname, '../../packages/styling/src/*'),
      '@invana/themes': resolve(__dirname, '../../packages/themes/src'),
      '@invana/themes/*': resolve(__dirname, '../../packages/themes/src/*'),

      
    }
  }
})
