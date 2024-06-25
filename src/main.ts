import './index.css'

import PixiApp from './states/PixiApp'
import PhysicsEngine from './states/PhysicsEngine'

const main = async () => {
  const pixiApp = PixiApp.getInstance()
  const physicsEngine = PhysicsEngine.getInstance()

  await pixiApp.app.init({
    width: window.innerWidth,
    height: 600,
    backgroundColor: 0x64b5f6,
  })

  physicsEngine.startEngine(pixiApp.app)

  document.getElementById('app')!.appendChild(pixiApp.app.canvas)
}

document.addEventListener('DOMContentLoaded', main)

