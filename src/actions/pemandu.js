import {
    CREATE_PEMANDU,
    GET_PEMANDU,
    UPDATE_PEMANDU,
    DELETE_PEMANDU
} from "./types"

import PemanduDataService from "../services/pemandu.service";

export const createPemandu = (nama, username, email, password, desc, rating) => async (dispatch) => {
    try {
        const res = await PemanduDataService.createPemandu({ nama, username, email, password, desc, rating });

        dispatch({
            type: CREATE_PEMANDU,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getPemandu = () => async (dispatch) => {
    try {
        const res = await PemanduDataService.getAll();

        dispatch({
            type: GET_PEMANDU,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const getPemanduById = (id) => async (dispatch) => {
    try {
        const res = await PemanduDataService.getById(id);

        dispatch({
            type: GET_PEMANDU,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const updatePemandu = (id, data) => async (dispatch) => {
    try {
        const res = await PemanduDataService.update(id, data);

        dispatch({
            type: UPDATE_PEMANDU,
            payload: data
        });

        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deletePemandu = (id) => async (dispatch) => {
    try {
        await PemanduDataService.deleteWisata(id);

        dispatch({
            type: DELETE_PEMANDU,
            payload: { id },
        })

    } catch (err) {
        console.log(err)
    }
}

