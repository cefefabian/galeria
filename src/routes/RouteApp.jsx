import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FullscreenApp from '../fulllsreen/FullscreenApp'
import GaleriaApp from '../home/GaleriaApp'

const RouteApp = () => {
  return (
        <Routes>
            <Route path='/' element={<GaleriaApp/>}/>

            <Route path='/fullscreen/:id' element={<FullscreenApp/>}/>

            <Route path='/*' element={<GaleriaApp/>}/>
        </Routes>
  )
}

export default RouteApp