import axios from "axios";
import { API_URL } from "../url";

export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const DELETE_USER = "GET_USER_DETAIL";
export const PUT_USER_EDIT = "PUT_USER_EDIT"

export const getUserList = () => {
    return (dispatch) => {
        axios
            .get(API_URL + "users")
            .then((response) => {
                dispatch({
                    type: GET_USER_LIST,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_USER_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const getUserDetail = (id) => {
    return (dispatch) => {
        axios
            .get(API_URL + `users/${id}`)
            .then((response) => {
                dispatch({
                    type: GET_USER_DETAIL,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_USER_DETAIL,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        axios
            .delete(API_URL + `users/${id}`)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}


export const putUserUpdate = (data, id) => {
    return (dispatch) => {
        axios
            .put(API_URL + `users/${id}`, data)
            .then((response) => {
                dispatch({
                    type: PUT_USER_EDIT,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: PUT_USER_EDIT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}