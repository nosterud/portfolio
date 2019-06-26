import sanityClient from "@sanity/client";

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "xtx6i2q5",
  dataset: "prod",
  useCdn: true
});