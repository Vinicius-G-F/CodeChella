import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Cabecalho.module.scss'
import logo from './Logo.svg'
import menu from './menu.svg'

export default function Cabecalho() {
  const local = useLocation();
  const url = local.pathname


  return (
    <header className={styles.cabecalho}>
        <Link className={styles.cabecalho__logo} to="/">
          <img src={logo} alt='logo da Code Chella'/>
        </Link>
        <div>
          <label htmlFor='menu-hamburguer'>
            <img src={menu} alt='botão para abrir o menu'/>
          </label>
          <input className={styles.menuHamburguer} id='menu-hamburguer' type='checkbox' />
          <nav>
            <Link id={(url === '/experiencia') ? styles['sublinhado'] : '' } to='/experiencia'>A experiência</Link>
            <hr />
            <Link id={(url === '/mapa') ? styles['sublinhado'] : '' } to='/mapa'>Mapa de Setores</Link>
            <hr />
            <Link id={(url === '/informacoes') ? styles['sublinhado'] : '' } to='/informacoes'>Informações</Link>
            <hr />
            <Link id={(url === '/comprar-ingresso') ? styles['sublinhado'] : '' } to='/comprar-ingresso'>Ingresso</Link>
          </nav>
        </div>
    </header>
  )
}
