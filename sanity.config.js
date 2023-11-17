import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "4uhy6hio",
  dataset: "production",
  title: "lampnetblog",
  apiVersion: "2023-17-11",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
