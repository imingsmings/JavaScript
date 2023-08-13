import { defineComponent } from 'vue'
import Style from '@/style/index.module.css'
import { a } from '@/test'
import logo from '@/assets/logo.png'
import test1 from '@/test?url'
import test2 from '@/test?raw'
import pkg from '../package.json'
const modules = import.meta.glob('./dir/*.js')

export default defineComponent({
  setup() {
    console.log(test1)
    console.log(test2)
    console.log(pkg)
    console.log(import.meta.env)
    console.log(modules)

    for (const path in modules) {
      modules[path]().then((mod) => {
        console.log(path, mod)
      })
    }
    return () => {
      return (
        <div className={`${Style.div} ${Style.text}`}>
          <p>Vue Pro Max</p>
          <p>{a.name}</p>
          <img src={logo} alt="1213" />
        </div>
      )
    }
  }
})
