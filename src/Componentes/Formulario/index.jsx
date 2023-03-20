import Campo from './Campo'
import ListaSuspensa from './ListaSuspensa'
import style from './Formulario.module.scss'
import { useState } from 'react'

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "O nome deve ter no mínimo 4 caracteres e no máximo 40 caracteres.",
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos.'
    },
    tipoDeIngresso: {
        customError: 'Selecione um tipo de ingresso'
    }
}

function enviaFormulario(evento, erros){
    evento.preventDefault()
    if(erros.length < 1){

        const campoNome = document.getElementById('nome')
        const listaSuspensa = document.getElementById('tipoDeIngresso')
        window.location.href = `/ingresso-comprado?nome=${campoNome.value}&tipo=${listaSuspensa.value}`
    }
}

export default function Formulario () {
    const [erros, setErros] = useState([])
    return (
        <>
        
        <form id='form' className={style.formulario} onSubmit={(evento)=>enviaFormulario(evento, erros)}>
            <Campo id='nome' nome='Nome Completo:' tipo='text' obrigatorio regex='.{4,40}' mensagemDeErro='O nome deve ter entre 4 e 40 caracteres' />
            <Campo id='email' nome='Email:' tipo='email' obrigatorio />
            <ListaSuspensa id='tipoDeIngresso' nome='Tipo de ingresso' mensagemDeErro='Selecione o tipo do ingresso' obrigatorio />
            <Campo id='aniversario' nome='Data de nascimento:' tipo='date' obrigatorio />
            <input onClick={()=>{
                const Ids = [ 'nome', 'email', 'tipoDeIngresso', 'aniversario']
                setErros([])
                const errosLista = []
                Ids.forEach(id=>{
                    const campo = document.getElementById(id)
                    if(id==='tipoDeIngresso'){
                        if(campo.value==='Tipo de ingresso'){
                            errosLista.push(mensagens[id].customError)
                            return
                        }
                    }

                    if(id==='aniversario'){

                        const dataNascimento = new Date(campo.value);
                        const dataAtual = new Date();
                        const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());
                        if(dataAtual<=dataMais18){
                            errosLista.push(mensagens[id].customError)
                        }
                    }

                    if(campo.validity.valid){
                        return
                    }
                    
                    tiposDeErro.forEach(erro=>{
                        if(campo.validity[erro]){
                            if(errosLista.includes(mensagens[id][erro])){
                                return
                            } else{
                                errosLista.push(mensagens[id][erro])
                            }
                        }
                    })
                })
                setErros(errosLista)

                }} value='Avançar!' className={style.formulario__submeter} type="submit" />
        </form>
        <div className={style.erros}>
            <span>
                    {erros.map(erro=>{
                        return(
                            <p key={erro}>{erro} <br/></p>
                        )
                    })}
            </span>
        </div>
        </>
    )
}