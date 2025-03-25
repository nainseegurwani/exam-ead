import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownLightswitch from './CountdownLightswitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountdownLightswitch />
    </>
  )
}

export default App
