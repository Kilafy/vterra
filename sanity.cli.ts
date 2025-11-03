import { defineCliConfig } from 'sanity/cli'
import { config } from './src/sanity/client'

export default defineCliConfig({
  api: {
    projectId: config.projectId,
    dataset: config.dataset,
  },
  deployment: {
    appId: 'mm1r3ujgce9bju1xv85piang',
  },
})
