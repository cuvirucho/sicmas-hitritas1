import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Historieta from './Historieta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Historieta/>
    </>
  )
}

export default App
