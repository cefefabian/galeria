import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { peticion } from '../../api/fetch'
import { peticionSearch } from '../../api/fetchSearch'

const Buttons = () => {
    const { page, search } = useSelector(state=> state.galeria)

    const paginacionSiguiente = () => {
        if (search !== null) {
            dispatch(peticionSearch(search, page + 1))
            return
        }
        dispatch(peticion(page + 1))
    }

    const paginacionatras = () => {
        if (search !== null) {
            dispatch(peticionSearch(search, page - 1))
            return
        }
        dispatch(peticion(page - 1))
    }
    const dispatch = useDispatch()
  return (
    <div className='div-botones'>
        {
            page > 1 &&
            (<button onClick={paginacionatras}><img src="../../public/left24.png" alt="" /></button>)
        }
        <h3>Page: {page}</h3>
        <button onClick={paginacionSiguiente}><img src="../../public/right24.png" alt="" /></button>
    </div>
  )
}

export default Buttons