import React, { useState } from 'react';
import './armario.css';
import Select from './Select/Select';
import Cards from '../Pg_categoria/Itens-card/itens-blusas';

function Armario() {
  // mapa filename -> boolean (true = mostrar no Select)
  const [imageVisibility, setImageVisibility] = useState({});

  const handleToggleImage = (filename, checked) => {
    setImageVisibility((prev) => ({
      ...prev,
      [filename]: checked,
    }));
  };

  return (
    <>
      <Cards onToggle={handleToggleImage} selectedImages={imageVisibility} />
      <Select imageVisibility={imageVisibility} />
    </>
  );
}
export default Armario;