import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import Crrsl from './Componentes/Destaques/Destaques.jsx'
import Capa from './Componentes/Capa/Capa.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Capa/>
      <Crrsl/>
      <Footer/>
    </>
  )
}

export default App;
