import React from 'react'
import style from './Banner.module.scss'

export default function Banner({ imagem, children }) {
  return (
    <div className={style.banner}>
        <img src={`./imagens/banners/${imagem}.png`} alt="banner do site" />
        <h1>{children}</h1>
    </div>
  )
}
