import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { peticion } from '../../api/fetch'

import { acionHover, ampliar } from '../../redux/galeriaSlice'
import { hoverFn } from '../hoverFn'


const Galeria = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(peticion())
    }, [])
    
    const {images, page, imagesindex} = useSelector(state=> state.galeria)
    if (images.length == 0) {
        dispatch(peticion())

    }
    console.log(imagesindex);
    const navegador = (id)=>{
        dispatch(ampliar(id))

    }


    return (
        <section className='container'>
        <article className='galery' >
        {
            images.map((img, i)=>(
                <>
                    {
                        i == 15
                        ? 
                        (   
                            <div onClick={()=>navegador(img.id)} className='card-img img-w' key={img.id}>
                                <Link to={`/fullscreen/${img.id}`}>
                                    <img  onMouseEnter={()=>dispatch(acionHover(img.id))} src={img.urls.regular} alt=""/>
                                </Link>
                            </div>
                        )
                        :
                        (
                            <div onClick={()=>navegador(img.id)} className='card-img' key={img.id}>
                                 <Link to={`/fullscreen/${img.id}`}>
                                    <img src={img.urls.regular} alt=""/>
                                </Link>
                            </div> 
                        )
                    }
                </> 
            ))
        }
        </article>
    </section>
  )
}

export default Galeria