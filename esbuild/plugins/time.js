const time = () => ({
    name: 'time',
    setup(build) {
        let time
        build.onStart(() => {
            time = Date.now()
        })
        build.onEnd((result) => {
            if (result.errors.length > 0) {
                return
            }
            console.log(
                `===> Build ended:${
                    Date.now() - time
                }ms  <===`
            )
        })
        build.onDispose(() => {
            console.log('===> Build Disposed <===')
        })
    }
})

export default time
