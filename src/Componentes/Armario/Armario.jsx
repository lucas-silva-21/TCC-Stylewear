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

        // First, ensure all categories exist in saved and preserve existing items
        Object.keys(basePecas).forEach(cat => {
          if (!saved[cat]) saved[cat] = [];
        });

        // Create a copy of saved items to preserve them
        const preservedItems = {};
        Object.keys(saved).forEach(cat => {
          preservedItems[cat] = Array.isArray(saved[cat]) ? [...saved[cat]] : [];
        });

        // Merge selectedItems_* into saved, preserving existing items from armarioAdded
        mapping.forEach(({ key, cat, sourceList }) => {
          try {
            const rawSel = readStorageKey(key);
            if (!rawSel) return;
            const selArr = JSON.parse(rawSel);
            if (!Array.isArray(selArr) || selArr.length === 0) return;
            
            // Start with preserved items from armarioAdded
            const existingUrls = new Set(preservedItems[cat] || []);
            
            selArr.forEach(item => {
              // if item is a string, treat as URL; if numeric, map to sourceList
              let url = null;
              if (typeof item === 'string') {
                url = item;
              } else {
                const idx = Number(item);
                if (!Number.isNaN(idx) && Array.isArray(sourceList) && sourceList[idx]) url = sourceList[idx];
              }
              if (url && !existingUrls.has(url)) {
                existingUrls.add(url);
              }
            });
            
            // Update saved with merged items
            saved[cat] = Array.from(existingUrls);
          } catch (e) { /* ignore parsing errors for this key */ }
        });

        // Remove duplicates and persist merged result back to localStorage (user-specific)
        Object.keys(saved).forEach(cat => {
          if (Array.isArray(saved[cat])) {
            saved[cat] = Array.from(new Set(saved[cat]));
          }
        });
        
        try { writeStorageKey('armarioAdded', JSON.stringify(saved)); } catch (e) { /* ignore */ }

        // build final pecas: prefer saved arrays (saved) when present, fallback to basePecas
        // Always ensure placeholder is present and items are unique
        const final = Object.keys(basePecas).reduce((acc, key) => {
          if (Array.isArray(saved[key]) && saved[key].length > 0) {
            // Use saved items, ensuring placeholder is present
            const items = Array.from(new Set(saved[key]));
            const PLACEHOLDER = '/Bloqueio.png';
            if (!items.includes(PLACEHOLDER)) {
              items.unshift(PLACEHOLDER);
            }
            acc[key] = items;
          } else {
            // Fallback to basePecas
            acc[key] = [...basePecas[key]];
          }
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

    // Listen for storage changes to update armario in real-time
    const handleStorageChange = (e) => {
      if (e.key && e.key.startsWith('armarioAdded')) {
        loadSaved();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom event for same-tab updates
    const handleCustomStorageChange = () => {
      loadSaved();
    };
    window.addEventListener('armarioUpdated', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('armarioUpdated', handleCustomStorageChange);
    };
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

  const removeItem = (categoria) => {
    try {
      const currIndex = index[categoria] || 0;
      const list = Array.isArray(pecas[categoria]) ? pecas[categoria] : [];
      if (list.length === 0) return;
      const url = list[currIndex];
      // Do not remove the placeholder
      if (!url || url === '/Bloqueio.png') return;

      // Ask for confirmation
      const confirmMsg = `Remover este item de ${categoria}?`;
      if (!window.confirm(confirmMsg)) return;

      // Build new list without the removed URL
      const newList = list.filter((u, i) => i !== currIndex && u !== url);
      // Ensure placeholder present
      if (!newList.includes('/Bloqueio.png')) newList.unshift('/Bloqueio.png');

      const newPecas = { ...pecas, [categoria]: Array.from(new Set(newList)) };
      setPecas(newPecas);

      // Adjust index to valid value
      setIndex((prev) => ({
        ...prev,
        [categoria]: newPecas[categoria].length > 0 ? (prev[categoria] % newPecas[categoria].length) : 0,
      }));

      // Update stored armarioAdded for the current user
      try {
        const raw = readStorageKey('armarioAdded');
        const saved = raw ? JSON.parse(raw) : {};
        if (Array.isArray(saved[categoria])) {
          saved[categoria] = saved[categoria].filter(u => u !== url);
        }
        writeStorageKey('armarioAdded', JSON.stringify(saved));
        // Dispatch custom event to notify other components
        window.dispatchEvent(new Event('armarioUpdated'));
      } catch (e) { /* ignore storage errors */ }

      // Reset button state by removing from selectedItems_* keys
      // Map categoria to possible selectedItems keys
      const selectedItemsKeys = [];
      switch (categoria) {
        case 'bone':
          selectedItemsKeys.push('selectedItems_bone');
          break;
        case 'blusas':
          selectedItemsKeys.push('selectedItems_blusas');
          break;
        case 'camiseta':
          selectedItemsKeys.push('selectedItems_camiseta');
          break;
        case 'parteDeBaixo':
          selectedItemsKeys.push('selectedItems_part_baixo', 'selectedItems_short', 'selectedItems_calca');
          break;
        case 'tenis':
          selectedItemsKeys.push('selectedItems_tenis');
          break;
      }

      // Remove URL from all relevant selectedItems keys
      selectedItemsKeys.forEach(key => {
        try {
          const rawSel = readStorageKey(key);
          if (!rawSel) return;
          const selArr = JSON.parse(rawSel);
          if (!Array.isArray(selArr)) return;
          
          // Filter out the removed URL (handle both string URLs and numeric indices)
          const filtered = selArr.filter(item => {
            if (typeof item === 'string') {
              return item !== url;
            }
            // If it's a number, we'd need to check if it maps to the removed URL
            // For now, keep numeric indices as they might reference other items
            return true;
          });
          
          // Only update if something was removed
          if (filtered.length !== selArr.length) {
            writeStorageKey(key, JSON.stringify(filtered));
          }
        } catch (e) { /* ignore errors for this key */ }
      });
    } catch (e) { /* ignore */ }
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
          <button
            type="button"
            className="armario-remove-button hanger-label"
            onClick={() => removeItem(categoria)}
            title="Remover item do armário"
            aria-label={`Remover item de ${label}`}
          >
            <img src="/lixeira.png" alt="lixeira" className="hanger-icon-outline" />
          </button>
        </div>

        <button className="seta" onClick={() => mudarImg(categoria, "dir")}>⏵</button>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <span className="armario-label">{label}</span>
      </div>
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
