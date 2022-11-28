import axios from 'axios';

const API_URL = "https://desolate-crag-78080.herokuapp.com/";


const getAll = () => {
    return axios.get(API_URL + "hotel")
}

const getById = id => {
    return axios.get(API_URL + `hotel/${id}`)
}

const createHotel = data => {
    return axios.post(API_URL + "hotel", data)
}

const updateHotel = (id, data) => {
    return axios.put(API_URL + `hotel/${id}`, data)
}

const deleteHotel = id => {
    return axios.delete(API_URL + `hotel/${id}`)
}

const HotelDataService = {
    getAll,
    getById,
    createHotel,
    updateHotel,
    deleteHotel
}

export default HotelDataService;
