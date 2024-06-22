import { Application } from 'pixi.js'

let singleton: App | null = null

export default class App {
  app: Application

  private constructor() {
    this.app = new Application({
      width: 800,
      height: 600,
      backgroundColor: 0xff0000,
    })
  }

  static getInstance() {
    if (!singleton) {
      singleton = new App()
    }

    return singleton
  }
}
