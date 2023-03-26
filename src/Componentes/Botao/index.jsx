import React from 'react'
import { Link } from 'react-router-dom'
import style from './Botao.module.scss'
import icone from './icone-botao.svg'

export default function Botao() {
  return (
    <Link to='/comprar-ingresso' className={style.botao}>
        Comprar ingresso!
        <img src={icone} alt='ticket'/>
    </Link>
  )
}
