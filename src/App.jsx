import { useState } from 'react'

import './App.css'
import Counter from './Counter'
import Team from './Team'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      
      <h2>React Core Concept</h2 >


      <Friends></Friends>
      <Team></Team>

      <Counter></Counter>

      
      
    </>
  )
}

export default App
