import React from 'react'
import style from './Titulo.module.scss'

export default function Titulo({children}) {
  return (
    <h2 className={style.titulo}>{children}</h2>
  )
}
