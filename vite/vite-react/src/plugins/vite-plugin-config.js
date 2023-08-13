export default () => {
  return {
    name: 'config-plugin',
    config: () => {
      return {
        build: {
          outDir: 'bundle'
        }
      }
    }
  }
}
