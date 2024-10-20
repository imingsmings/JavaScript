import type { App, Plugin } from 'vue'

import Button from './components/Button.vue'

const components = [Button]

const install = (app: App) => {
  components.forEach(com => {
    app.component(com.name as string, com)
  })
}

const vuecoms: Plugin = {
  install,
}

export default vuecoms
export { Button }
