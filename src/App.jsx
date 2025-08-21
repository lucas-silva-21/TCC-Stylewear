import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header/Header'
import Destaques from './Componentes/Destaques/Destaques'
import Footer from './Componentes/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Destaques/>
      <Footer/>
    </>
  )
}

export default App;
