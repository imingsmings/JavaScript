import React, { useContext } from 'react'
// import { SingleSpaContext } from 'single-spa-react'

function RootComponent(props: any) {
  // const props = useContext(SingleSpaContext)
  // console.log(props)

  return (
    <div>
      <div>User Service</div>
      <input type='text' />
      <p>{props.a}</p>
    </div>
  )
}

export default RootComponent
