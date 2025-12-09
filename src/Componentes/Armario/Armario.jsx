import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Inicio/Header/AuthContext';
import './armario.css';

export default function Armario() {
  const basePecas = {
    bone: [
      "/Bloqueio.png",
    ],
    blusas: [
      "/Bloqueio.png",
    ],
    camiseta: [
      "/Bloqueio.png",
    ],
    parteDeBaixo: [
      "/Bloqueio.png",
    ],
    tenis: [
      "/Bloqueio.png",
    ]
  };

  // `pecas` is the working source for the UI; prefer saved items in localStorage
  const [pecas, setPecas] = useState(() => ({ ...basePecas }));

  const [index, setIndex] = useState({
    bone: 0,
    blusas: 0,
    camiseta: 0,
    parteDeBaixo: 0,
    tenis: 0,
  });

  const { user } = useContext(AuthContext);

  const getUserKey = () => {
    if (!user) return 'guest';
    return user.id || user.email || user.name || 'user';
  };

  const readStorageKey = (key) => {
    const kUser = getUserKey();
    try {
      const byUser = localStorage.getItem(`${key}_${kUser}`);
      if (byUser) return byUser;
    } catch (e) { /* ignore */ }
    return localStorage.getItem(key);
  };

  const writeStorageKey = (key, value) => {
    const kUser = getUserKey();
    try {
      localStorage.setItem(`${key}_${kUser}`, value);
      return;
    } catch (e) { /* ignore user-specific write */ }
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  };

  useEffect(() => {
    const loadSaved = () => {
      try {
        const raw = readStorageKey('armarioAdded');
        const saved = raw ? JSON.parse(raw) : {};

        // Merge any selectedItems_* keys into `saved`.
        // These files now store image URLs; older numeric indices are also supported
        const mapping = [
          { key: 'selectedItems_bone', cat: 'bone', sourceList: basePecas.bone },
          { key: 'selectedItems_blusas', cat: 'blusas', sourceList: basePecas.blusas },
          { key: 'selectedItems_camiseta', cat: 'camiseta', sourceList: basePecas.camiseta },
          { key: 'selectedItems_part_baixo', cat: 'parteDeBaixo', sourceList: basePecas.parteDeBaixo },
          { key: 'selectedItems_short', cat: 'parteDeBaixo', sourceList: basePecas.parteDeBaixo },
          { key: 'selectedItems_calca', cat: 'parteDeBaixo', sourceList: basePecas.parteDeBaixo },
          { key: 'selectedItems_tenis', cat: 'tenis', sourceList: basePecas.tenis },
        ];

        mapping.forEach(({ key, cat, sourceList }) => {
          try {
            const rawSel = readStorageKey(key);
            if (!rawSel) return;
            const selArr = JSON.parse(rawSel);
            if (!Array.isArray(selArr) || selArr.length === 0) return;
            saved[cat] = saved[cat] || [];
            selArr.forEach(item => {
              // if item is a string, treat as URL; if numeric, map to sourceList
              let url = null;
              if (typeof item === 'string') {
                url = item;
              } else {
                const idx = Number(item);
                if (!Number.isNaN(idx) && Array.isArray(sourceList) && sourceList[idx]) url = sourceList[idx];
              }
              if (url && !saved[cat].includes(url)) saved[cat].push(url);
            });
          } catch (e) { /* ignore parsing errors for this key */ }
        });

        // persist merged result back to localStorage (user-specific)
        try { writeStorageKey('armarioAdded', JSON.stringify(saved)); } catch (e) { /* ignore */ }

        // build final pecas: prefer saved arrays (saved) when present, fallback to basePecas
        const final = Object.keys(basePecas).reduce((acc, key) => {
          const source = Array.isArray(saved[key]) && saved[key].length > 0 ? saved[key] : basePecas[key];
          acc[key] = Array.from(new Set(source));
          return acc;
        }, {});

        // For `bone` category explicitly remove legacy bone image files
        // (e.g. Bone1.png, Bone2.png...) and ensure the placeholder
        // `/Bloqueio.png` appears as an available item.
        try {
          if (Array.isArray(final.bone)) {
            const boneFiltered = final.bone.filter((url) => {
              if (!url) return false;
              const fname = url.split('/').pop() || '';
              // remove filenames like Bone1.png, bone2.png, etc.
              if (/^bone\d*\.png$/i.test(fname)) return false;
              return true;
            });
            // ensure placeholder is present
            if (!boneFiltered.includes('/Bloqueio.png')) boneFiltered.unshift('/Bloqueio.png');
            final.bone = Array.from(new Set(boneFiltered));
          }
        } catch (e) { /* ignore filtering errors */ }

        // Ensure the placeholder `/Bloqueio.png` is also present as an item
        // for the other categories so users can select the locked placeholder.
        try {
          const PLACEHOLDER = '/Bloqueio.png';
          ['blusas', 'camiseta', 'parteDeBaixo', 'tenis'].forEach((cat) => {
            if (!Array.isArray(final[cat])) return;
            if (!final[cat].includes(PLACEHOLDER)) final[cat].unshift(PLACEHOLDER);
            final[cat] = Array.from(new Set(final[cat]));
          });
        } catch (e) { /* ignore */ }

        setPecas(final);
      } catch (e) {
        setPecas({ ...basePecas });
      }
    };

    loadSaved();
  }, [user]);

  const mudarImg = (categoria, direcao) => {
    if (!pecas[categoria] || pecas[categoria].length === 0) return;
    const max = pecas[categoria].length;
    setIndex((prev) => ({
      ...prev,
      [categoria]:
        direcao === "esq"
          ? (prev[categoria] - 1 + max) % max
          : (prev[categoria] + 1) % max,
    }));
  };

  const renderItem = (categoria, label) => (
    <div className="armario-item-block" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
      <div className="seta-container">
        <button className="seta" onClick={() => mudarImg(categoria, "esq")}>⏴</button>

        <div className="armario-item">
          <img
            src={pecas[categoria][index[categoria]]}
            alt={label}
          />
        </div>

        <button className="seta" onClick={() => mudarImg(categoria, "dir")}>⏵</button>
      </div>
      <span className="armario-label">{label}</span>
    </div>
  );

  return (
    <div className="armario-container">

      {renderItem("bone", "Bonés")}

      <div className="armario-grid">
        <div>{renderItem("blusas", "Blusas")}</div>

        <div>{renderItem("camiseta", "Camisetas")}</div>
      </div>

      {renderItem("parteDeBaixo", "Parte de Baixo")}

      {renderItem("tenis", "Tênis")}

    </div>
  );
}
