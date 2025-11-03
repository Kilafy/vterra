import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import { config } from './src/sanity/client'

export default defineConfig({
  name: 'vterra-studio',
  title: 'Vterra Real Estate Solutions',
  
  projectId: config.projectId,
  dataset: config.dataset,
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
