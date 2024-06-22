/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readFileSync } from 'fs'

const packageJson = JSON.parse(readFileSync(resolve(__dirname, 'package.json')))

function toCamelCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (_, c) => (c ? c.toLowerCase() : ''))
}

const formattedName = toCamelCase(packageJson.name)

const bearUrl = 'https://demo.bearfightgames.com/'

export default defineConfig(() => {
  return {
    base: `/${formattedName}`,
    env: {
      VITE_BASE_URL: `${bearUrl}${formattedName}`,
    },
  }
})

