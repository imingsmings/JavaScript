import { App, Plugin, Component } from 'vue'

import Button from '@/components/Button.vue'

const components: Component[] = [
  Button
]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

const ComoponentPlugin: Plugin = {
  install
}

export default ComoponentPlugin
