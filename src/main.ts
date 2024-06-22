import './index.css'

import App from './states/App'

const main = async () => {
  const app = App.getInstance()
  await app.app.init()

  document.body.appendChild(app.app.canvas)
}

main()

