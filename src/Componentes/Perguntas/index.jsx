import style from './Perguntas.module.scss'
import seta from './arrow_drop_down.svg'
import { useState } from 'react'



export default function Perguntas ({ pergunta, children}) {
    const [resposta, setResposta] = useState('') 

    function visulizacaoDaResposta (resposta) {
        if (!resposta){
            setResposta(children)
        }
        if(resposta){
            setResposta('')
        }
    }

    return (
        <section className={style.perguntas}>
            <div onClick={()=>{ visulizacaoDaResposta (resposta) }}>
                <h3>{pergunta}</h3>
                <img src={seta} alt="seta para baixo, clique para mostrar a resposta" />
            </div>
            {resposta}
        </section>
    )
}