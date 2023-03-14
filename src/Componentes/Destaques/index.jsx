import React from 'react'
import style from './Destaques.module.scss'

export default function Destaques({children}) {
  return (
    <section className={style.destaques}>
      {children}
    </section>
  )
}
