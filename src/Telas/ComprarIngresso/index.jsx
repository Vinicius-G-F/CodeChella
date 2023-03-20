import Banner from 'Componentes/Banner'
import Formulario from 'Componentes/Formulario'
import style from './Ingresso.module.scss'

export default function ComprarIngresso () {
    return (
        <main className={style.ingresso}>
            <Banner imagem='garanta-seu-ingresso'>
                Garanta seu Ingresso
            </Banner>
            <h2 className={style.ingresso__titulo}>Preencha o formulário a seguir:</h2>
            <Formulario />
        </main>
    )
}