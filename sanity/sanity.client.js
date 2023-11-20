import { createClient } from "@sanity/client";

const config = {
  projectId: "9lurceqg",
  dataset: "production",
  apiVersion: "2023-11-18",
  useCdn: false,
};

const client = createClient(config);

export default client;
