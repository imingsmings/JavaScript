import { useState } from 'react'

function ToggleMessage() {
  const [visible, setVisible] = useState(false)
  const toggleMessage = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <button onClick={toggleMessage}>Toggle</button>
      {visible && <p>This message is visible!!!</p>}
    </div>
  )
}

export default ToggleMessage
