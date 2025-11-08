import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '03zp3wjd',  // current project ID
    dataset: 'production',
  },
   // Add appId to the deployment section in sanity.cli.js or sanity.cli.ts to avoid prompting for application id on next deploy
  deployment: {
    appId: 'yfldancb451a83beqdvzyple',
  },
  //…
})
