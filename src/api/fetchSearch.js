import { useSelector } from 'react-redux'
import { agregar, cargando } from '../redux/galeriaSlice'


export const peticionSearch = (search = '', page = 1) => {
    const key = 'igu4KZzWJ4RnT3z9P4p3BA01NtYAfNUEZk6S-xw8pvw'

    const api = `https://api.unsplash.com/search/photos?client_id=${key}&query=${search}&page=${page}&per_page=16`
    console.log(api);
    return async (dispatch)=>{
    
        const resp = await fetch(api)
        const data = await resp.json()
        const results = await data.results
    
        dispatch(agregar({images: results, search, page}))
    }
}