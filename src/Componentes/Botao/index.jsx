import React from 'react'
import style from './Botao.module.scss'
import icone from './icone-botao.svg'

export default function Botao() {
  return (
    <a href='/comprar-ingresso' className={style.botao}>
        Comprar ingresso!
        <img src={icone} alt='ticket'/>
    </a>
  )
}
