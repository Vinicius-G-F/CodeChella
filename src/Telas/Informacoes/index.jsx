import Banner from 'Componentes/Banner'
import style from './Informacoes.module.scss'
import Perguntas from 'Componentes/Perguntas'

export default function Informacoes () {
    return (
        <main className={style.informacoes}>
            <Banner imagem='informacoes-gerais'>
                Informações Gerais
            </Banner>
            <h2 className={style.informacoes__titulo}>Perguntas Frequentes:</h2>
            <Perguntas pergunta='Quais serão as atrações?'>
                <p>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. <a href='/'>Confira o line-up em detalhes clicando neste link!</a>
                </p>
            </Perguntas>
            <Perguntas pergunta='Qual é a classificação etária?'>
                <p>A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.</p>
            </Perguntas>
            <Perguntas pergunta='Quais são os setores disponíveis?'>
                <p>Pista Premium <br/>
                    Pista Comum <br/>
                    Cadeiras térreo <br/>
                    Cadeiras superiores <br/>
                    Rampas 
                </p>
            </Perguntas>
            <Perguntas pergunta='Quais são os itens proibidos?'>
                <p>Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.</p>
            </Perguntas>
            <Perguntas pergunta='Quem tem direito a meia-entrada?'>
                <p>De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios.</p>
            </Perguntas>
        </main>
    )
}