import style from './IngressoComprado.module.scss'
import Banner from 'Componentes/Banner'
import Ingresso from 'Componentes/Ingresso'

export default function IngressoComprado () {
    return (
        
        <main className={style['ingresso-comprado']}>
            <Banner imagem='seu-ingresso-esta-aqui'>
                Seu ingresso está aqui!
            </Banner>
            <div className={style['container']}>
                <h2 className={style['ingresso-comprado__titulo']}>
                    Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!
                </h2>
                <Ingresso/>
            </div>
        </main>
    )
}