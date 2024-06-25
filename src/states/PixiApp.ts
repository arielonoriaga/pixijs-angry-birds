import { Application } from 'pixi.js'

let singleton: PixiApp | null = null

export default class PixiApp {
  app: Application

  private constructor() {
    this.app = new Application()
  }

  static getInstance() {
    if (!singleton) {
      singleton = new PixiApp()
    }

    return singleton
  }
}
