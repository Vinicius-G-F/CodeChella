import style from './Ingresso.module.scss'
import logo from './Logo.png'
import icone from './icone.png'
import qr from './qr.png'

const params = new URLSearchParams(window.location.search);
const nome = params.get('nome');
const tipo = params.get('tipo');

export default function Ingresso () {
    return (
        <section className={style.ingresso}>
            <div className={style.ingresso__cabecalho}>
                <img src={logo} alt="logo do site" />
                <img src={icone} alt="código html" />
            </div>
            <div className={style.ingresso__container}>
                <img src={qr} alt="código qr" />
                <h3>{nome}</h3>
                <div>
                    <p>Ingresso Costesia</p>
                    <p>{tipo}</p>
                    <p>Data: 11/03</p>
                    <p>Local: São Paulo-SP</p>
                </div>
            </div>
        </section>
    )
}