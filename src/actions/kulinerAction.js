import axios from "axios";
import { API_URL } from "../url";

export const GET_KULINER_LIST = "GET_KULINER_LIST";
export const GET_KULINER_DETAIL = "GET_KULINER_DETAIL";
export const DELETE_KULINER = "DELETE_KULINER";
export const PUT_KULINER_EDIT = "PUT_KULINER_EDIT";

export const getKulinerList = () => {
    return (dispatch) => {
        axios
            .get(API_URL + "kuliner")
            .then((response) => {
                dispatch({
                    type: GET_KULINER_LIST,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_KULINER_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const getKulinerDetail = (id) => {
    return (dispatch) => {
        axios
            .get(API_URL + `kuliner/${id}`)
            .then((response) => {
                dispatch({
                    type: GET_KULINER_DETAIL,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_KULINER_DETAIL,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const deleteKuliner = (id) => {
    return (dispatch) => {
        axios
            .delete(API_URL + `hotel/${id}`)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const updateKuliner = (data, id) => {
    return (dispatch) => {
        axios
            .put(API_URL + `kuliner/${id}`, data)
            .then((response) => {
                dispatch({
                    type: PUT_KULINER_EDIT,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: PUT_KULINER_EDIT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}