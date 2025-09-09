import { useState } from 'react';
import Header from './Componentes/Inicio/Header/Header';
import Destaques from './Componentes/Inicio/Destaques/Destaques';
import Capa from './Componentes/Inicio/Capa/Capa';
import Categoria from './Componentes/Inicio/Categoria/Categoria';
import Container1 from './Componentes/Inicio/Container1/Container';
import Carrosel from './Componentes/Inicio/Carrosel/carrosel'
import Footer from './Componentes/Inicio/Footer/Footer';
import Cadastro from './Componentes/Cadastro_Login/Cadastro/Cadastro';
import Login from './Componentes/Cadastro_Login/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route  path="/"
          element={
            <>
              <Header/>
              <Capa/>
              <Destaques/>
              <Categoria/>
              <Container1/>
              <Carrosel/>
              <Footer />
            </>
          }
        />
        <Route
          path="/cadastro"
          element={
            <>
              <Cadastro />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route 
        path='/Umbro'
        element={
          <>
            <Header/>
            <Footer/>
          </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
