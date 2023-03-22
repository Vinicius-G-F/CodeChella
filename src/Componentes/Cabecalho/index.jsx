import React from 'react'
import styles from './Cabecalho.module.scss'
import logo from './Logo.svg'
import menu from './menu.svg'

const urlAtual = window.location.pathname

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
            <a id={(urlAtual === '/experiencia') ? styles['sublinhado'] : '' } href='/experiencia'>A experiência</a>
            <hr />
            <a id={(urlAtual === '/mapa') ? styles['sublinhado'] : '' } href='/mapa'>Mapa de Setores</a>
            <hr />
            <a id={(urlAtual === '/informacoes') ? styles['sublinhado'] : '' } href='/informacoes'>Informações</a>
            <hr />
            <a id={(urlAtual === '/comprar-ingresso') ? styles['sublinhado'] : '' } href='/comprar-ingresso'>Ingresso</a>
          </nav>
        </div>
    </header>
  )
}
