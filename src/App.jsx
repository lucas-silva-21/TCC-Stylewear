import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import Crrsl from './Componentes/Destaques/Destaques.jsx'
import Capa from './Componentes/Capa/Capa.jsx'
import Container from './Componentes/Container1/Container.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Capa/>
      <Crrsl/>
      <Container/>
      <Footer/>
    </>
  )
}

export default App;
