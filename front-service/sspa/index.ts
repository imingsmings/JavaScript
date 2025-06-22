interface Module {
  [key: string]: {
    bootstrap: (props: Props) => void
    mount: (props: Props) => void
    unmount: (props: Props) => void
  }
}

interface CustomProps {
  [key: string]: any
  [num: number]: any
}

interface ApplicationConfig {
  appName: string
  applicationOrLoadingFn: () => Promise<any>
  activityFn: () => boolean
  customProps: CustomProps
}

export type Props = CustomProps & {
  appName: string
}

const apps: ApplicationConfig[] = []
const module: Module = {}
let prevApp = ''
let currentApp = ''

export function registerApplication(config: ApplicationConfig) {
  const registerd = apps.find((app) => app.appName === config.appName)
  if (registerd) return

  apps.push(config)
}

export function start() {
  handleRouter()
}

async function handelMountApp(appName: string) {
  const app = apps.find((app) => app.appName === appName)

  if (!app) return

  if (!module[appName]) {
    const source = await app.applicationOrLoadingFn()
    module[appName] = source
  }

  const props = {
    appName,
    ...app.customProps
  }

  module[appName].mount(props)
}

function handleUnmountApp(appName: string) {
  const app = apps.find((app) => app.appName === appName)
  if (!app) return

  const props = {
    appName,
    ...app.customProps
  }

  if (module[appName]) {
    module[appName].unmount(props)
  }
}

function handleRouter() {
  const rawPushState = window.history.pushState

  window.history.pushState = async function (...args) {
    prevApp = location.hash.slice(2)
    rawPushState.apply(window.history, args)
    currentApp = location.hash.slice(2)

    handleUnmountApp(prevApp)
    handelMountApp(currentApp)
  }
}
