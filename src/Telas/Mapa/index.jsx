import Banner from 'Componentes/Banner'
import MapaDeSetores from 'Componentes/MapaDeSetores'
import Topico from 'Componentes/Topico'
import React from 'react'
import style from './Mapa.module.scss'

export default function Mapa() {
  return (
    <main className={style.mapa}>
        <Banner imagem='mapa-de-setores' >
            Mapa de Setores
        </Banner>
        <MapaDeSetores />
        <h2 className={style.mapa__titulo}>Mais detalhes sobre os setores:</h2>
        <section className={style.mapa__topicos}>
          <Topico estilo='coluna' imagem='pista'>
            <h3>Pista</h3>
            <p>Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.</p>
          </Topico>
          <Topico estilo='coluna' imagem='pista-premium'>
            <h3>Pista Premium</h3>
            <p>Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.</p>
          </Topico>
          <Topico estilo='coluna' imagem='cadeiras'>
            <h3>Cadeiras</h3>
            <p>Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.</p>
          </Topico>
        </section>
    </main>
  )
}
