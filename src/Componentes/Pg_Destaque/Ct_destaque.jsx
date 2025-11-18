import React from 'react'
import './ct_destaque.css'

function Conjunto({ estilo = 'OldMoney', images = {} }) {

  const OldMoney = {
    main: '/Outfit/outfit-oldmoney.png',
    bone: '/Outfit/outfit-oldmoney-bone.png',
    blusa: '/Outfit/outfit-oldmoney-blusa.png',
    calca: '/Outfit/outfit-oldmoney-calça.png',
    tenis: '/Outfit/outfit-oldmoney-tenis.png',
    desc_bone: 'Boné Six Panel Creative Minds Verde',
    desc_blusa: 'Blusa',
    desc_calca: 'Calça',
    desc_tenis: 'Tênis'
  }

  const SportLife = {
    main: '/Outfit/outfit-sportlife.png',
    bone: '',
    blusa: '/Outfit/outfit-sportlife-blusa.png',
    calca: '/Outfit/outfit-sportlife-calça.png',
    tenis: '/Outfit/outfit-sportlife-tenis.png',
    desc_bone: 'Nenhum Boné',
    desc_blusa: 'Blusa',
    desc_calca: 'Calça',
    desc_tenis: 'Tênis'
  }

  const SportWear = {
    main: '/Outfit/outfit-sportwear.png',
    bone: '/Outfit/outfit-sportwear-bone.png',
    blusa: '/Outfit/outfit-sportwear-blusa.png',
    calca: '/Outfit/outfit-sportwear-calça.png',
    tenis: '/Outfit/outfit-sportwear-tenis.png',
    desc_bone: 'Nenhum Boné',
    desc_blusa: 'Blusa',
    desc_calca: 'Calça',
    desc_tenis: 'Tênis'
  }

  const Y2K = {
    main: '/Outfit/outfit-y2k.png',
    bone: '/Outfit/outfit-y2k-bone.png',
    blusa: '/Outfit/outfit-y2k-blusa.png',
    calca: '/Outfit/outfit-y2k-calça.png',
    tenis: '/Outfit/outfit-y2k-tenis.png',
    desc_bone: 'Boné',
    desc_blusa: 'Blusa',
    desc_calca: 'Calça',
    desc_tenis: 'Tênis'
  }

  const StreetWear = {
    main: '/Outfit/outfit-streetwear.png',
    bone: '',
    blusa: '/Outfit/outfit-streetwear-blusa.png',
    calca: '/Outfit/outfit-streetwear-calça.png',
    tenis: '/Outfit/outfit-streetwear-tenis.png',
    desc_bone: 'Nenhum Boné',
    desc_blusa: 'Blusa',
    desc_calca: 'Calça',
    desc_tenis: 'Tênis'
  }

  const PRESETS = { OldMoney, SportLife, SportWear, Y2K, StreetWear }
  const preset = PRESETS[estilo] || OldMoney
  const {
    main,
    bone,
    blusa,
    calca,
    tenis,
    desc_bone = 'Boné',
    desc_blusa = 'Blusa',
    desc_calca = 'Calça',
    desc_tenis = 'Tênis'
  } = { ...preset, ...images }

  return (
    <>
      <div className="div-princ-dest">
        <section className='section-estilo'>
          <h4>HELLO</h4>
          <h5>My name is</h5>
          <div><h1>{estilo}</h1></div>
        </section>

        <section className="section-dest">
          {main && <img src={main} alt={`Outfit ${estilo || ''}`} id='outfit_img' />}

          <div className="div-info-dest">
            <ul className="ul-info-dest">
              {bone && (
                <li>
                  <img src={bone} alt={`Boné do estilo ${estilo || ''}`} id='img' />
                  <div className='div-descrição'><h4>{desc_bone}</h4></div>
                </li>
              )}
              {blusa && (
                <li>
                  <img src={blusa} alt={`Blusa do estilo ${estilo || ''}`} id='img' />
                  <div className='div-descrição'><h4>{desc_blusa}</h4></div>
                </li>
              )}
            </ul>

            <ul className="ul-info-dest">
              {calca && (
                <li>
                  <img src={calca} alt={`Calça do estilo ${estilo || ''}`} id='img-calça' />
                  <div className='div-descrição'><h4>{desc_calca}</h4></div>
                </li>
              )}
              {tenis && (
                <li>
                  <img src={tenis} alt={`Tênis do estilo ${estilo || ''}`} id='img' />
                  <div className='div-descrição'><h4>{desc_tenis}</h4></div>
                </li>
              )}
            </ul>
          </div>

          <div style={{ background:'#751e8b', height:'30px', minWidth:'259%', borderRadius:'0px 0px 10px 10px', border:'1.5px solid black', borderTop: '0px', marginLeft:'-1px' }} />
        </section>
      </div>
    </>
  )
}

export default Conjunto;