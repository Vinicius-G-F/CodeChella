import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from 'Telas/Base'
import Inicio from 'Telas/Inicio'
import Experiencia from 'Telas/Experiencia'
import Mapa from 'Telas/Mapa'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Base/>}>
                <Route index element={<Inicio />} />
                <Route path='experiencia' element={<Experiencia /> } />
                <Route path='mapa' element={<Mapa/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
