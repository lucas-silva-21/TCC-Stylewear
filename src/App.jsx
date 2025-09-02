import { useState } from 'react';
import Header from './Componentes/Header/Header';
import Destaques from './Componentes/Destaques/Destaques';
import Capa from './Componentes/Capa/Capa';
import Categoria from './Componentes/Categoria/Categoria';
import Footer from './Componentes/Footer/Footer';
import Cadastro from './Componentes/Cadastro_Login/Cadastro/Cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route  path="/"
          element={
            <>
              <Header />
              <Capa />
              <Destaques />
              <Categoria />
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
      </Routes>
    </Router>
  );
}

export default App;
