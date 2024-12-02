/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEFAULT_VARIANT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
