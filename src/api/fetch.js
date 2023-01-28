
import { agregar } from '../redux/galeriaSlice'


export const peticion = ( page = 1) => {

    const key = 'igu4KZzWJ4RnT3z9P4p3BA01NtYAfNUEZk6S-xw8pvw'

    const api = `https://api.unsplash.com/photos?client_id=${key}&page=${page}&per_page=16`
    console.log(api);
    return async (dispatch)=>{
    
        const resp = await fetch(api)
        const data = await resp.json()
    
        dispatch(agregar({images: data, search: null, page, isLoading: false}))
    }
}