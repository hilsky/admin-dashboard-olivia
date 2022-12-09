import axios from "axios";
import { API_URL } from "../url";

export const GET_PEMANDU_LIST = "GET_PEMANDU_LIST";
export const GET_PEMANDU_DETAIL = "GET_PEMANDU_DETAIL";
export const DELETE_PEMANDU = "DELETE_PEMANDU";
export const PUT_PEMANDU_EDIT = "PUT_PEMANDU_EDIT"

export const getPemanduList = () => {
    return (dispatch) => {
        axios
            .get(API_URL + "guide")
            .then((response) => {
                dispatch({
                    type: GET_PEMANDU_LIST,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_PEMANDU_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const getPemanduDetail = (id) => {
    return (dispatch) => {
        axios
            .get(API_URL + `guide/${id}`)
            .then((response) => {
                dispatch({
                    type: GET_PEMANDU_DETAIL,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_PEMANDU_DETAIL,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const deletePemandu = (id) => {
    return (dispatch) => {
        axios
            .delete(API_URL + `guide/${id}`)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const putPemanduUpdate = (data, id) => {
    return (dispatch) => {
        axios
            .put(API_URL + `guide/${id}`, data)
            .then((response) => {
                dispatch({
                    type: PUT_PEMANDU_EDIT,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: PUT_PEMANDU_EDIT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}