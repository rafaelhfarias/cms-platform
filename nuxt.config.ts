// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
    build: {
        transpile: ['vueuc'],   // fix dev error: Cannot find module 'vueuc'
    },
    srcDir: 'src/',
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    meta: {
        title: "Escolinha do TFT"
    },
    vite: {
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
            }),
        ],
        ssr: {
            noExternal: ['moment', 'naive-ui', '@juggle/resize-observer', '@css-render/vue3-ssr'],
        },
    }
})
