import React , { useState } from 'react';

import Header from './Componentes/Inicio/Header/Header';
import Destaques from './Componentes/Inicio/Destaques/Destaques';
import Capa from './Componentes/Inicio/Capa/Capa';
import Categoria from './Componentes/Inicio/Categoria/Categoria';
import Container1 from './Componentes/Inicio/Container1/Container';
import Carrosel from './Componentes/Inicio/Carrosel/carrosel'
import Marcas_secund from './Componentes/Inicio/Marcas_secund/Marcas_secund';
import Footer from './Componentes/Inicio/Footer/Footer';

import Cadastro from './Componentes/Cadastro_Login/Cadastro/Cadastro';
import Login from './Componentes/Cadastro_Login/Login/Login';

import Adidas from './Componentes/Pg_marcas/pg_adidas';
import Nike from './Componentes/Pg_marcas/pg_nike';
import Lacoste from './Componentes/Pg_marcas/pg_lacoste';
import Umbro from './Componentes/Pg_marcas/pg_umbro';
import Puma from './Componentes/Pg_marcas/pg_puma';
import PlanetGirls from './Componentes/Pg_marcas/pg_planetgirls';
import BadBoy from './Componentes/Pg_marcas/pg_badboy';
import Polo from './Componentes/Pg_marcas/pg_polo';
import Desgosto from './Componentes/Pg_marcas/pg_desgosto';
import GDC from './Componentes/Pg_marcas/pg_gdc';
import MorenaRosa from './Componentes/Pg_marcas/pg_morenarosa';
import Surfgang from './Componentes/Pg_marcas/pg_surfgang';

import Armario from './Componentes/Armario/Armario';

import Conjunto from './Componentes/Pg_Destaque/Ct_destaque';

import Blusas from './Componentes/Pg_categoria/pg_blusas';
import Camisetas from './Componentes/Pg_categoria/pg_camisetas';
import Calças from './Componentes/Pg_categoria/pg_calças';
import Shorts from './Componentes/Pg_categoria/pg_short';
import Acessorio from './Componentes/Pg_categoria/pg_acessorio';
import Tenis from './Componentes/Pg_categoria/pg_tenis';
import Bones from './Componentes/Pg_categoria/pg_bones';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <>
              <Header />
              <Capa />
              
              <Destaques />
              <Categoria />
              <Container1 />
              <Carrosel />
              <Marcas_secund />
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
              <Header tt_dest1='tt_dest1' />
              <Umbro painel='./Painel/Painel.Umbro.png' altpainel='Painel da marca Umbro' logo='./Logos/Umbro_logo.png' altlog='Logo da Umbro' />
              <Footer />
            </>
          } />
        <Route
          path='/Nike'
          element={
            <>
              <Header tt_dest2='tt_dest2'/>
              <Nike painel='./Painel/Painel.Nike.png' altpainel='Painel da marca Umbro' logo='./Logos/Nike_logo.png' altlog='Logo da Nike' />
              <Footer />
            </>
          } />
        <Route
          path='/Adidas'
          element={
            <>
              <Header tt_dest3='tt_dest3'/>
              <Adidas painel='./Painel/Painel.Adidas.png' altpainel='Painel da marca Adidas' logo='./Logos/Adidas_logo.png' altlog='Logo da Adidas' />
              <Footer />
            </>
          } />
        <Route
          path='/Lacoste'
          element={
            <>
              <Header tt_dest4='tt_dest4'/>
              <Lacoste painel='./Painel/Painel.Lacoste.png' altpainel='Painel da marca Lacoste' logo='./Logos/Lacoste_logo.png' altlog='Logo da Lacoste' />
              <Footer />
            </>
          } />
        <Route
          path='/Puma'
          element={
            <>
              <Header tt_dest5='tt_dest5'/>
              <Puma painel='./Painel/Painel.Puma (2).png' altpainel='Painel da marca Puma' logo='./Logos/Puma_logo.png' altlog='Logo da Puma' />
              <Footer />
            </>
          } />
        <Route
          path='/Planet+Girls'
          element={
            <>
              <Header />
              <PlanetGirls painel='./Painel/Painel.PlanetGirls.png' altpainel='Painel da marca PlanetGirls' logo='./Logos/PlanetGirls_logo.png' altlog='Logo da Planet Girls' />
              <Footer />
            </>
          } />
        <Route
          path='/Bad+Boy'
          element={
            <>
              <Header />
              <BadBoy painel='./Painel/Painel.BadBoy.png' altpainel='Painel da marca BadBoy' logo='./Logos/BadBoy_logo.png' altlog='Logo da Bad Boy' />
              <Footer />
            </>
          } />
        <Route
          path='/Polo'
          element={
            <>
              <Header />
              <Polo painel='./Painel/Painel.Polo.png' altpainel='Painel da marca Polo' logo='./Logos/Polo_logo.png' altlog='Logo da Polo' />
              <Footer />
            </>
          } />
        <Route
          path='/Desgosto'
          element={
            <>
              <Header />
              <Desgosto painel='./Painel/Painel.Desgosto.png' altpainel='Painel da marca Desgosto' logo='./Logos/Desgosto_logo.png' altlog='Logo da Desgosto' />
              <Footer />
            </>
          } />
        <Route
          path='/Gangue+do+caramelo'
          element={
            <>
              <Header />
              <GDC painel='./Painel/Painel.GDC.png' altpainel='Painel da marca Gangue do caramelo' logo='./Logos/GangueDCaramelo_logo2.png' altlog='Logo da Gangue do caramelo' />
              <Footer />
            </>
          } />
        <Route
          path='/Morena+Rosa'
          element={
            <>
              <Header />
              <MorenaRosa painel='./Painel/Painel.MorenaRosa.png' altpainel='Painel da marca Morena Rosa' logo='./Logos/MorenaRosa_logo.png' altlog='Logo da Morena Rosa' />
              <Footer />
            </>
          } />
        <Route
          path='/Surfgang'
          element={
            <>
              <Header />
              <Surfgang painel='./Painel/Painel.Surfgang.png' altpainel='Painel da marca Surfgang' logo='./Logos/Surfgang_logo2.png' altlog='Logo da Surfgang' />
              <Footer />
            </>
          } />
          <Route
          path='/Mad'
          element={
            <>
              <Header />
              <Surfgang painel='./Painel/Painel.Mad.png' altpainel='Painel da marca Mad' logo='./Logos/Mad_logo.png' altlog='Logo da Mad' />
              <Footer />
            </>
          } />
        <Route
          path='/Armario'
          element={
            <>
              <Header />
              <Armario />
            </>
          } />
        <Route
          path='/Categoria+Parte_superior'
          element={
            <>
              <Header />
              <Camisetas titulo="Parte de cima" />
              <Marcas_secund/>
              <Footer />
            </>
          } />
        <Route
          path='/Categoria+Blusas'
          element={
            <>
              <Header />
              <Blusas titulo="Blusas"/>
              <Marcas_secund/>
              <Footer />
            </>
          } />
          <Route
          path='/Categoria+Parte_inferior'
          element={
            <>
              <Header />
              <Calças titulo="Parte de baixo"/>
              <Marcas_secund/>
              <Footer />
            </>
          } />

          <Route
          path='/Categoria+Calças'
          element={
            <>
              <Header />
              <Calças titulo="Calças"/>
              <Marcas_secund/>
              <Footer />
            </>
          } />
          <Route
          path='/Categoria+Shorts'
          element={
            <>
              <Header />
              <Shorts titulo="Shorts"/>
              <Marcas_secund/>
              <Footer />
            </>
          } />

          <Route
          path='/Categoria+Acessorios'
          element={
            <>
              <Header />
              <Acessorio titulo="Acessórios"/>
              <Marcas_secund/>
              <Footer />
            </>
          } />
          <Route
          path='/Categoria+Tenis'
          element={
            <>
              <Header />
              <Tenis titulo="Tênis"/>
              <Marcas_secund/>
              <Footer />
            </>
          } />
          <Route
          path='/Categoria+Bones'
          element={
            <>
              <Header />
              <Bones titulo="Bonés"/>
              <Marcas_secund/>
              <Footer />
            </>
          } />
          <Route
          path='/Destaque+OldMoney'
          element={
            <>
              <Header />
              <Conjunto estilo='OldMoney' />
              <Footer />
            </>
          } />
          <Route
          path='/Destaque+SportLife'
          element={
            <>
              <Header />
              <Conjunto estilo='SportLife' />
              <Footer />
            </>
          } />
          <Route
          path='/Destaque+StreetWear'
          element={
            <>
              <Header />
              <Conjunto estilo='StreetWear' />
              <Footer />
            </>
          } />
          <Route
          path='/Destaque+Y2K'
          element={
            <>
              <Header />
              <Conjunto estilo='Y2K' />
              <Footer />
            </>
          } />
          <Route
          path='/Destaque+SportWear'
          element={
            <>
              <Header />
              <Conjunto estilo='SportWear' />
              <Footer />
            </>
          } />
      </Routes>
    </Router>
  );
}

export default App;
