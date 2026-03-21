/// <reference types="vite/client" />
/// <reference types="@cloudflare/workers-types" />

interface ImportMetaEnv {
  // Add your custom environment variables here, for example:
  // VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
