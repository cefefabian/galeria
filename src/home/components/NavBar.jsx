import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { peticionSearch } from '../../api/fetchSearch'
import { peticion } from '../../api/fetch'

const NavBar = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const onInputChange = ({target}) =>{
        setSearch({
            ...search,
            [target.name]: target.value
        })
    }

    const onInputSearch = (e) =>{
        e.preventDefault()
        if (search.busqueda.trim() === '' || undefined) {
            dispatch(peticion())
            return
        }
            dispatch(peticionSearch(search.busqueda))
    }
  return (
    <div className='buscador'>
            <form onSubmit={onInputSearch} className='search search-f'>
                <input placeholder='Buscar imagen en ingles' className='search search-i' name='busqueda' onChange={onInputChange} type="text" />
                <input className='buscar buscar-s' type="submit" />
            </form>
    </div>
  )
}

export default NavBar