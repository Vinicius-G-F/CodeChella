import Banner from 'Componentes/Banner'
import MapaDeSetores from 'Componentes/MapaDeSetores'
import React from 'react'
import style from './Mapa.module.scss'

export default function Mapa() {
  return (
    <main className={style.mapa}>
        <Banner imagem='mapa-de-setores' >
            Mapa de Setores
        </Banner>
        <MapaDeSetores />
        <h2>Mais detalhes sobre os setores:</h2>
    </main>
  )
}
