// import { resolveConfig } from 'vite'

export default (enforce) => {
  // console.log(enforce)
  return {
    name: 'config-plugin',
    enforce,
    config: (config, env) => {
      // console.log(config)
      // console.log(env)
      console.log(enforce)
      return {
        build: {
          outDir: 'bundle'
        }
      }
    },
    configResolved: (resolveConfig) => {
      console.log('-------------------')
      // console.log(resolveConfig)
    },
    configureServer: (server) => {
      console.log('*********************')
      // console.log(server)
      server.middlewares.use((req, res, next) => {
        // console.log(req)
        // console.log(res)
        // console.log(next)
        next()
      })
    },
    transformIndexHtml: (html) => {
      console.log(html)
    },
    buildStart: () => {
      console.log('buildStart')
    }
  }
}
