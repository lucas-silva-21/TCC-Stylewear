import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header/Header'
import Destaques from './Componentes/Destaques/Destaques'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Destaques/>
    </>
  )
}

export default App;
