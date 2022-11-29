import {
    CREATE_KULINER,
    GET_KULINER,
    UPDATE_KULINER,
    DELETE_KULINER
} from "./types"

import KulinerDataService from "../services/kuliner.service";

export const createKuliner = (namaKuliner, alamat, jamBuka, jamTutup, hariBuka, hariTutup) => async (dispatch) => {
    try {
        const res = await KulinerDataService.createKuliner({ namaKuliner, alamat, jamBuka, jamTutup, hariBuka, hariTutup });

        dispatch({
            type: CREATE_KULINER,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getKuliner = () => async (dispatch) => {
    try {
        const res = await KulinerDataService.getAll();

        dispatch({
            type: GET_KULINER,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const getKulinerById = (id) => async (dispatch) => {
    try {
        const res = await KulinerDataService.getById(id);

        dispatch({
            type: GET_KULINER,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const updateKuliner = (id, data) => async (dispatch) => {
    try {
        const res = await KulinerDataService.updateKuliner(id, data);

        dispatch({
            type: UPDATE_KULINER,
            payload: data
        });

        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deleteKuliner = (id) => async (dispatch) => {
    try {
        await HotelDataService.deleteKuliner(id);

        dispatch({
            type: DELETE_KULINER,
            payload: { id },
        })

    } catch (err) {
        console.log(err)
    }
}

