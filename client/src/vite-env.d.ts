/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADSENSE_SLOT_HOME_PRIMARY?: string;
  readonly VITE_ADSENSE_SLOT_HOME_SECONDARY?: string;
  readonly VITE_ADSENSE_SLOT_BLOG_LISTING?: string;
  readonly VITE_ADSENSE_SLOT_BLOG_ARTICLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
