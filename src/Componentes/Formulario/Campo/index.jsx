import style from './Campo.module.scss'

export default function Campo ({ id, nome, tipo, obrigatorio, regex, mensagemDeErro}) {
    return (
        <div className={style.campo}>
            <label htmlFor={id}>{nome}</label>
            <input onInvalid={evento=>{
                evento.preventDefault()
            }} id={id} type={tipo} required={obrigatorio} pattern={regex} title={mensagemDeErro} />
        </div>
    )
}