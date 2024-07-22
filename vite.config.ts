// import { resolve } from 'path'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
// https://antdv.com/docs/vue/introduce
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@Assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@Config': fileURLToPath(new URL('./src/config', import.meta.url)),
      '@Layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@Modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@Utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@Services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@Themes': fileURLToPath(new URL('./src/themes', import.meta.url)),
      '@Src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
