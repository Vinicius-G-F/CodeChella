import React from 'react'
import mapa from './Mapa.svg'
import style from './MapaDeSetores.module.scss'

export default function MapaDeSetores() {
  return (
    <section className={style.mapa}>
        <img src={mapa} alt='mapa de setores' />
        <div className={style.mapa__legenda}>
            <h3>Legenda:</h3>
            <div>
                <div className={style.azul} />
                <p>Pista Premium</p>
            </div>
            <div>
                <div className={style.rosa} />
                <p>Pista Comum</p>
            </div>
            <div>
                <div className={style.verde} />
                <p>Cadeiras térreo</p>
            </div>
            <div>
                <div className={style.roxo} />
                <p>Cadeiras Superiores</p>
            </div>
            <div>
                <div className={style.azul} />
                <p>Rampas</p>
            </div>
        </div>
    </section>
  )
}
