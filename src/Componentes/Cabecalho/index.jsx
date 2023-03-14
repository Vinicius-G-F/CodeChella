import React from 'react'
import styles from './Cabecalho.module.scss'
import logo from './Logo.svg'
import menu from './menu.svg'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <a className={styles.cabecalho__logo} href="/">
          <img src={logo} alt='logo da Code Chella'/>
        </a>
        <div>
          <label htmlFor='menu-hamburguer'>
            <img src={menu} alt='botão para abrir o menu'/>
          </label>
          <input className={styles.menuHamburguer} id='menu-hamburguer' type='checkbox' />
          <nav>
            <a href='/experiencia'>A experiência</a>
            <hr />
            <a href='/mapa'>Mapa de Setores</a>
            <hr />
            <a href='/'>Informações</a>
            <hr />
            <a href='/'>Ingresso</a>
          </nav>
        </div>
    </header>
  )
}
