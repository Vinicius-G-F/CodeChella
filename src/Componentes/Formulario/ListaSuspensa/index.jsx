import style from './ListaSuspensa.module.scss'
export default function ListaSuspensa ({id, nome, mensagemDeErro}){
    return (
        <div className={style['lista-suspensa']}>
            <label htmlFor={id}>{nome}</label>
            <select title={mensagemDeErro} id={id} onInvalid={evento=>{
                evento.preventDefault()
            }}>
                <option>Tipo de ingresso</option>
                <option>Pista Premium</option>
                <option>Pista Comum</option>
                <option>Cadeiras térreo</option>
                <option>Cadeiras superiores</option>
                <option>Rampas</option>
            </select>
        </div>
    )
}