import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AudioUpload from "./AudioUpload.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AudioUpload />
    </>
  )
}

export default App
