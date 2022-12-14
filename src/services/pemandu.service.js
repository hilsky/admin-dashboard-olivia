import axios from 'axios';

import { API_URL } from '../url';


const getAll = () => {
    return axios.get(API_URL + "guide")
}

const getById = id => {
    return axios.get(API_URL + `guide/${id}`)
}

const createPemandu = data => {
    return axios.post(API_URL + "guide", data)
}

const updatePemandu = (id, data) => {
    return axios.put(API_URL + `guide/${id}`, data)
}

const deletePemandu = id => {
    return axios.delete(API_URL + `guide/${id}`)
}

const PemanduDataService = {
    getAll,
    getById,
    createPemandu,
    updatePemandu,
    deletePemandu
}

export default PemanduDataService;
