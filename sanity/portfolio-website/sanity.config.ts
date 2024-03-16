import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {netlifyTool} from 'sanity-plugin-netlify'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Website',

  projectId: 'jt4x01r3',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), netlifyTool()],

  schema: {
    types: schemaTypes,
  },
})
