import {
    CREATE_HOTEL,
    GET_HOTEL,
    UPDATE_HOTEL,
    DELETE_HOTEL
} from "./types"

import HotelDataService from "../services/hotel.service";

export const createHotel = (namaHotel, alamat, fasWifi, fasParkir, fasSarapan, rating, imgHotel) => async (dispatch) => {
    try {
        const res = await HotelDataService.createHotel({ namaHotel, alamat, fasWifi, fasParkir, fasSarapan, rating, imgHotel });

        dispatch({
            type: CREATE_HOTEL,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getHotel = () => async (dispatch) => {
    try {
        const res = await HotelDataService.getAll();

        dispatch({
            type: GET_HOTEL,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const getHotelById = (id) => async (dispatch) => {
    try {
        const res = await HotelDataService.getById(id);

        dispatch({
            type: GET_HOTEL,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const updateHotel = (id, data) => async (dispatch) => {
    try {
        const res = await HotelDataService.updateUser(id, data);

        dispatch({
            type: UPDATE_HOTEL,
            payload: data
        });

        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deleteHotel = (id) => async (dispatch) => {
    try {
        await HotelDataService.deleteUser(id);

        dispatch({
            type: DELETE_HOTEL,
            payload: { id },
        })

    } catch (err) {
        console.log(err)
    }
}

