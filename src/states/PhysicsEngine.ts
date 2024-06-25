import {
  Body, Engine, Runner, World,
} from 'matter-js'
import { Application, Container } from 'pixi.js'

let singleton: PhysicsEngine | null = null

export default class PhysicsEngine {
  engine: Engine
  world: World
  bodies: { sprite: Container; body: Body }[] = []
  isEngineRunning = false

  private constructor() {
    this.engine = Engine.create()
    this.world = this.engine.world
  }

  static getInstance() {
    if (!singleton) {
      singleton = new PhysicsEngine()
    }

    return singleton
  }

  startEngine(app: Application) {
    if(!this.world.bodies.length || this.isEngineRunning) return

    app.ticker.add(() => {
      this.bodies.forEach(({ sprite, body }) => {
        if(!sprite) return

        sprite.position.set(
          body.position.x,
          body.position.y,
        )
      })
    })

    Runner.run(this.engine)

    this.isEngineRunning = true
  }
}
