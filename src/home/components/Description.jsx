import React from 'react'

const Description = () => {
  return (
    <div className='description'>
        <div>
            <h1>Proyecto galeria con api</h1>
            <p className='p1'>Este proyecto fue construiido con <b>react vite, redux toolkit, css puro, react router dom y con la api de <a href="https://unsplash.com/">unsplash</a></b> la cual proporciona mas de 4 millones de imagenes de todo tipo</p>
            <p className='p2'>El proyecto tiene un <b>buscador que devuelve las imagenes que esten relacionadas con la palabra ingresada, una paginacion</b> (cada pagina contiene 15 imagenes), <b>tambien al hacer click en cualquier imagen se abre un slider</b> con funciones como fullscreen y flechas para ver las proximas imagenes en el slider  </p>
        </div>
    </div>
  )
}

export default Description