import { Application } from 'pixi.js'
import { initDevtools as initDevtoolsPixi } from '@pixi/devtools'

export const initDevtools = (app: Application) => {
  if(import.meta.env.MODE === 'development') {
    initDevtoolsPixi({ app })
  }
}
