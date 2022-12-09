import axios from 'axios';

import { API_URL } from '../url';


const getAll = () => {
    return axios.get(API_URL + "wisata")
}

const getById = id => {
    return axios.get(API_URL + `wisata/${id}`)
}

const create = data => {
    return axios.post(API_URL + "wisata", data)
}

const update = (id, data) => {
    return axios.put(API_URL + `wisata/${id}`, data)
}

const deleteWisata = id => {
    return axios.delete(API_URL + `wisata/${id}`)
}

const WisataDataService = {
    getAll,
    getById,
    create,
    update,
    deleteWisata
}

export default WisataDataService;
