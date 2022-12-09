import axios from 'axios';

import { API_URL } from '../url';


const getAll = () => {
    return axios.get(API_URL + "users")
}

const getById = id => {
    return axios.get(API_URL + `users/${id}`)
}

const createUser = data => {
    return axios.post(API_URL + "users", data)
}

const updateUser = (id, data) => {
    return axios.put(API_URL + `users/${id}`, data)
}

const deleteUser = id => {
    return axios.delete(API_URL + `users/${id}`)
}

const UserDataService = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser
}

export default UserDataService;
