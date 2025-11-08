export const dynamic = "force-static";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

// 👇 Add this line to fully disable Sanity's video plugin
const disabledPlugins = {
  name: 'disableMux',
  plugins: [],
  form: {
    file: {
      // override Mux field with a dummy to avoid imports
      components: {
        input: () => null,
        preview: () => null,
      },
    },
  },
};

export default defineConfig({
  name: "default",
  title: "lampnets-blog",

  projectId: "03zp3wjd",
  dataset: "production",

  basePath: "/studio",

  plugins: [
    deskTool({
      structure: (S) =>
        S.documentTypeListItems().filter((item) => item.getId() !== "mux.video"),
    }),
    disabledPlugins, // 👈 add this
  ],

  schema: {
    types: schemaTypes,
  },
});
