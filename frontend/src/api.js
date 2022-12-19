import axios from "axios";

export const api = axios.create({
    baseURL: `http://localhost:9000/`
})

export const apiCronograma = axios.create({
    baseURL: `http://localhost:9000/Cronograma`
})

export const apiEquipe = axios.create({
    baseURL: 'http://localhost:9000/Equipe'
})

export const apiMetas = axios.create({
    baseURL: 'http://localhost:9000/Metas'
})