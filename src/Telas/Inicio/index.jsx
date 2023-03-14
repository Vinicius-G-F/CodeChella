import React from 'react'
import 'estilos/estilosGlobais.scss'
import Banner from 'Componentes/Banner'
import Topico from 'Componentes/Topico'
import Botao from 'Componentes/Botao'
import Titulo from 'Componentes/Titulo'
import Destaques from 'Componentes/Destaques'
import style from './Inicio.module.scss'

export default function Inicio() {
  return (
    <>
      <main>
        <Banner imagem='home'>
          Boas-vindas ao <br/> #CodeChella2023!
        </Banner>
        <section  className={style.inicio}>
          <Topico estilo='padrão' imagem='show'>
            <h3>{'<'} 11 e 12 de Março {'>'} <br/>
            Aluródromo de São Paulo</h3>
            <p>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
            <Botao />
          </Topico>
          <Titulo>
            /Line-Up/
          </Titulo>
          <Destaques>
            <h2>SÁBADO {'<'}11/03{'>'}</h2>
            <h3>System of a DOM</h3>
            <h4>Python Maiden</h4>
            <h4>Apollo Client 2001</h4>
            <h4>Bon Java</h4>
            <h4>NickCallback</h4>
            <h5>Linkin Promises</h5>
            <h5>Fullstack Fighters</h5>
            <h5>Papa React</h5>
            <h5>Angular in Chains</h5>
            <h6>Agnostic Front-end</h6>
            <h6>SlipkNode</h6>
            <h6>Pink Flutter</h6>
            <h6>Kiss</h6>
          </Destaques>
          <Destaques>
            <h2>DOMINGO {'<'}12/03{'>'}</h2>
            <h3>Lana Del Ploy</h3>
            <h4>Dua Lib</h4>
            <h4>The Backnd</h4>
            <h4>CSS Styles</h4>
            <h4>ArrayAna Grande</h4>
            <h4>DJ Query</h4>
            <h5>Miley Cypress</h5>
            <h5>The Bootstrap Boys</h5>
            <h5>Json Derulo</h5>
            <h5>CloudPlay</h5>
            <h5>Dev Lovato</h5>
            <h6>Kylie MiLOG</h6>
            <h6>Jenkins Brothers</h6>
            <h6>Rubycat Dolls</h6>
          </Destaques>
          <div className={style.inicio__imagem} />
        </section>
      </main>
    </>
  )
}
