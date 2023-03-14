import Banner from 'Componentes/Banner'
import Topico from 'Componentes/Topico'
import React from 'react'
import style from './Experiencia.module.scss'

export default function Experiencia() {
  return (
    <>
        <main className={style.experiencia}>
            <Banner imagem='a-experiencia'>
                A Experiência
            </Banner>
            <Topico estilo='padrão' imagem='inclusao'>
                <h3>Acessibilidade e Inclusão</h3>
                <p>Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!</p>
            </Topico>
            <Topico estilo='invertido' imagem='sustentabilidade'>
                <h3>Sustentabilidade</h3>
                <p>Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.</p>
            </Topico>
            <Topico estilo='padrão' imagem='atracoes'>
                <h3>Atrações</h3>
                <p>Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!</p>
            </Topico>
        </main>
    </>
  )
}
