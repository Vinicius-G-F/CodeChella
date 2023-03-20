import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from 'Telas/Base'
import Inicio from 'Telas/Inicio'
import Experiencia from 'Telas/Experiencia'
import Mapa from 'Telas/Mapa'
import Informacoes from 'Telas/Informacoes'
import ComprarIngresso from 'Telas/ComprarIngresso'
import IngressoComprado from 'Telas/IngressoComprado'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Base/>}>
                <Route index element={<Inicio />} />
                <Route path='experiencia' element={<Experiencia /> } />
                <Route path='mapa' element={<Mapa/>} />
                <Route path='informacoes' element={ <Informacoes /> } />
                <Route path='comprar-ingresso' element={ <ComprarIngresso />} />
                <Route path='ingresso-comprado' element={ <IngressoComprado /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
