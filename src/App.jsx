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

import Adidas from './Componentes/Pg_marcas/pg_adidas';
import Nike from './Componentes/Pg_marcas/pg_nike';
import Lacoste from './Componentes/Pg_marcas/pg_lacoste';
import Umbro from './Componentes/Pg_marcas/pg_umbro';
import Puma from './Componentes/Pg_marcas/pg_puma';

import Armario from './Componentes/Armario/Armario';

import Camisetas from './Componentes/Pg_categoria/pg_camisetas';

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
            <Umbro painel='./Painel.Umbro.png' altpainel='Painel da marca Umbro' logo='./Logos/Logo_Umbro.png' altlog='Logo da Umbro'/>
            <Footer/>
          </>
        }/>
        <Route 
          path='/Nike'
          element={
            <>
              <Header/>
              <Nike painel='./Painel.Nike.png' altpainel='Painel da marca Umbro' logo='./Logos/nike_logo.png' altlog='Logo da Nike'/>
              <Footer/>
            </>
          }/>
          <Route 
          path='/Adidas'
          element={
            <>
              <Header/>
              <Adidas painel='./Painel.Adidas.png' altpainel='Painel da marca Adidas' logo='./Logos/Adidas_logo.png' altlog='Logo da Adidas'/>
              <Footer/>
            </>
          }/>
          <Route 
          path='/Lacoste'
          element={
            <>
              <Header/>
              <Lacoste painel='./Painel.Lacoste.png' altpainel='Painel da marca Lacoste' logo='./Logos/lacoste-logo.png' altlog='Logo da Lacoste'/>
              <Footer/>
            </>
          }/>
          <Route 
          path='/Puma'
          element={
            <>
              <Header/>
              <Puma painel='./Painel.Puma.png' altpainel='Painel da marca Puma' logo='./Logos/puma-logo.png' altlog='Logo da Puma'/>
              <Footer/>
            </>
          }/>
          <Route 
          path='/Armario'
          element={
            <>
              <Header/>
              <Armario/>
            </>
          }/>
          <Route 
          path='/Categoria+Camisetas'
          element={
            <>
              <Header/>
              <Camisetas titulo="Camisetas"/>
              <Footer/>
            </>
          }/>
          <Route 
          path='/Categoria+Blusas'
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
