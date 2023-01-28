import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { atrasar, avanzar } from '../../redux/galeriaSlice'

const ImgAmplia = () => {
  const [contador, setContador] = useState(0)
  const {imagesId, images, imagesindex} = useSelector(state=> state.galeria)


 console.log(imagesId.id);
 let miIdi = []

 
 const navigate = useNavigate()
  const dispatch = useDispatch()
  const cerrar = () =>{
    setContador(0)
    navigate('/')
  }

  const buscarIndex = () =>{
    images.forEach(element => {
      miIdi.push(element.id)
      
      let prueba = miIdi.indexOf(imagesId.id)

      dispatch(avanzar(prueba))
    });
  }

  const siguiente = ()=>{
    buscarIndex()
  }

  const atras = ()=>{
    buscarIndex()
    if (prueba === 0) {
      prueba = 15
    }
  }
  console.log(contador);

  const full = () =>{
    if (contador === 0) {
      document.documentElement.requestFullscreen();
      document.querySelector('.fullscreen').classList.add('full')
      
    }
    setContador(1)
    if (contador === 1) {
      document.exitFullscreen();
      document.querySelector('.fullscreen').classList.remove('full')

      setContador(0)
    }
    
  }

  return (
    <div className='fullscreen'>

        <div className='btns'>
          <div>
              <button onClick={full}><img src="../../../public/fullscreen24.png" alt="" /></button>

            <Link to={`/fullscreen/${imagesId.id}`}>
              <button className='atras' onClick={atras}><img src="../../../public/left24.png" alt="" /></button>
            </Link>
            
          </div>
        </div>

        <div>
          {

           (<img className='image' src={imagesId.urls.regular} alt="" />)
          }
          
        </div>

        <div className='btns'>
          <div>
            <button onClick={cerrar}>X</button>
            <Link to={`/fullscreen/${imagesId.id}`}>
              <button onClick={siguiente}><img src="../../../public/right24.png" alt="" /></button>
            </Link>
          </div>
        </div>

    </div>
  )
}

export default ImgAmplia