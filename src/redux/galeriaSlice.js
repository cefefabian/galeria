import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export const galeriaSlice = createSlice({
    name: 'galeria',
    initialState: {
        isLoading: true,
        images: [],
        imagesId: [],
        imagesindex: [],
        search: null,
        page: 0,
        dataHover: null
    },
    reducers: {
        cargando: (state) =>{
            state.isLoading = true
        },
        agregar: (state, action) =>{
            state.images = action.payload.images
            state.page = action.payload.page
            state.search = action.payload.search
            state.isLoading = action.payload.isLoading

            state.imagesId = state.images
            state.imagesindex = state.images
        },
        ampliar: (state, action) => {
            const selectImg = state.images.find((img)=> img.id == action.payload)
            state.imagesId = selectImg
            
        },
        avanzar: (state, action) => {
            if (action.payload === 15) {
                return
            }
            action.payload++
            state.imagesId = state.images[action.payload]
        },
        atrasar: (state, action) => {
            if (action.payload < 0) {
                return
            }
            action.payload--
            state.imagesId = state.images[action.payload]
        },
        acionHover: (state, action) => {
            console.log(action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const { cargando, agregar, ampliar, avanzar, atrasar, acionHover } = galeriaSlice.actions;