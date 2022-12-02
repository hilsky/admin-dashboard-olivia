import {
    CREATE_WISATA,
    GET_WISATA,
    UPDATE_WISATA,
    DELETE_WISATA
} from "./types"

import WisataDataService from "../services/wisata.service";

export const createWisata = (namaWisata, alamat, deskripsi, rating, imgBg) => async (dispatch) => {
    try {
        const res = await WisataDataService.create({ namaWisata, alamat, deskripsi, rating, imgBg });

        dispatch({
            type: CREATE_WISATA,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getWisata = () => async (dispatch) => {
    try {
        const res = await WisataDataService.getAll();

        dispatch({
            type: GET_WISATA,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const getWisataById = (id) => async (dispatch) => {
    try {
        const res = await WisataDataService.getById(id);

        dispatch({
            type: GET_WISATA,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const updateWisata = (id, data) => async (dispatch) => {
    try {
        const res = await WisataDataService.update(id, data);

        dispatch({
            type: UPDATE_WISATA,
            payload: data
        });

        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await WisataDataService.deleteWisata(id);

        dispatch({
            type: DELETE_WISATA,
            payload: { id },
        })

    } catch (err) {
        console.log(err)
    }
}

