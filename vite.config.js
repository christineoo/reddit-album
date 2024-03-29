import { defineConfig } from "vite"
// import { createHtmlPlugin } from 'vite-plugin-html';
import react from "@vitejs/plugin-react"

export default defineConfig({
  root: "src",
  build: {
    // Relative to the root
    outDir: "../dist",
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  plugins: [
    // createHtmlPlugin({
    //   inject: {
    //     data: {
    //       title: env === 'production' ? 'My site' : `My site [${env.toUpperCase()}]`,
    //     },
    //   },
    // }),
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: "**/*.{jsx,tsx}",
      jsxRuntime: "classic"
    })
  ],
  base: "/reddit-album/"
})
