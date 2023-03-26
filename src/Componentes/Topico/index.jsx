import React from 'react'
import style from './Topico.module.scss'


export default function Topico({children, imagem, estilo}) {
  const estilosObjeto = {}
  if(estilo==='padrão'){
    estilosObjeto.topico='topico'
    estilosObjeto.imagem='topico__imagem'
    
  }
  if(estilo==='invertido'){
    estilosObjeto.topico='topico--invertido'
    estilosObjeto.imagem='topico--invertido__imagem'
  }
  if(estilo==='coluna'){
    estilosObjeto.topico='topico--coluna'
    estilosObjeto.imagem='topico--coluna__imagem'

  }



  return (
    <article className={style[estilosObjeto.topico]}>
        <img className={style[estilosObjeto.imagem]} src={`./imagens/topicos/${imagem}.png`} alt='plateia animada curtindo o show'/>
        {children}
      </article>
  )
}
