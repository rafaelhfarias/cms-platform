import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "sidebar"
declare module "/Users/rafaelhipolito/projects/cms-platform/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}