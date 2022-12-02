import {
    CREATE_USER,
    GET_USER,
    UPDATE_USER,
    DELETE_USER
} from "./types"

import UserDataService from "../services/user.service";

export const createUser = (fullName, username, email, password) => async (dispatch) => {
    try {
        const res = await UserDataService.createUser({ fullName, username, email, password });

        dispatch({
            type: CREATE_USER,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getUser = () => async (dispatch) => {
    try {
        const res = await UserDataService.getAll();

        dispatch({
            type: GET_USER,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const getUserById = (id) => async (dispatch) => {
    try {
        const res = await UserDataService.getById(id);

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const updateUser = (id, data) => async (dispatch) => {
    try {
        const res = await UserDataService.updateUser(id, data);

        dispatch({
            type: UPDATE_USER,
            payload: data
        });

        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await UserDataService.deleteUser(id);

        dispatch({
            type: DELETE_USER,
            payload: { id },
        })

    } catch (err) {
        console.log(err)
    }
}

