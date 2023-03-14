import React from 'react'
import logo from './logo-footer.svg'
import style from './Rodape.module.scss'
import instagram from './instagram.svg'
import discord from './discord.svg'
import twitter from './twitter.svg'
import whatsapp from './WhatsApp.svg'

export default function Rodape() {
  return (
    <footer className={style.rodape}>
        <img src={logo} alt='logo do site'/>
        <div className={style.container}>
            <p>Acesse nossas redes:</p>
            <div className={style.imagens}>
                <img src={whatsapp} alt="whatsapp" />
                <img src={discord} alt="discord" />
                <img src={instagram} alt="instagram" /> 
                <img src={twitter} alt="twitter" />
            </div>
        </div>
        <div className={style.rodape__nota}>
          <p>Desenvolvido por Alura.</p>
          <p>Projeto fictício sem fins comerciais.</p>
        </div>
    </footer>
  )
}
