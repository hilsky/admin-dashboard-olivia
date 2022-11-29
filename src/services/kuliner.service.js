import axios from 'axios';

const API_URL = "https://desolate-crag-78080.herokuapp.com/";


const getAll = () => {
    return axios.get(API_URL + "kuliner")
}

const getById = id => {
    return axios.get(API_URL + `kuliner/${id}`)
}

const createKuliner = data => {
    return axios.post(API_URL + "kuliner", data)
}

const updateKuliner = (id, data) => {
    return axios.put(API_URL + `kuliner/${id}`, data)
}

const deleteKuliner = id => {
    return axios.delete(API_URL + `kuliner/${id}`)
}

const KulinerDataService = {
    getAll,
    getById,
    createKuliner,
    updateKuliner,
    deleteKuliner
}

export default KulinerDataService;
