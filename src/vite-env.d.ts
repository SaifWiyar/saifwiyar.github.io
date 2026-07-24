/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ID?: string;
  readonly VITE_ACADEMIC_HUB_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
