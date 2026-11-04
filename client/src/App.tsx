import { useState } from 'react'
import { Catalog } from './components/Catalog/Catalog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Catalog/>
    </>
  )
}

export default App
