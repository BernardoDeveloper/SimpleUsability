import preact from "@preact/preset-vite";
import capri from "@capri-js/preact";
import { telefunc } from "telefunc/vite";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    preact(),
    capri({
      spa: "/preview",
    }),
    telefunc({
      disableNamingConvention: true,
    }),
  ],
});
