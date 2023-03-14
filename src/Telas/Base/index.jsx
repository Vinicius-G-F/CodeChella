import Cabecalho from 'Componentes/Cabecalho'
import Rodape from 'Componentes/Rodape'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Base() {
  return (
    <>
        <Cabecalho />
            <Outlet />
        <Rodape />
    </>
  )
}
