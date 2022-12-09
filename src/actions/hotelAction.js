import axios from "axios";
import { API_URL } from "../url";

export const GET_HOTEL_LIST = "GET_HOTEL_LIST";
export const GET_HOTEL_DETAIL = "GET_HOTEL_DETAIL";
export const DELETE_HOTEL = "DELETE_HOTEL";
export const PUT_HOTEL_EDIT = "PUT_HOTEL_EDIT"



export const getHotelList = () => {
    return (dispatch) => {
        axios
            .get(API_URL + "hotel")
            .then((response) => {
                dispatch({
                    type: GET_HOTEL_LIST,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_HOTEL_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const getHotelDetail = (id) => {
    return (dispatch) => {
        axios
            .get(API_URL + `hotel/${id}`)
            .then((response) => {
                dispatch({
                    type: GET_HOTEL_DETAIL,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_HOTEL_DETAIL,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const deleteHotel = (id) => {
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

export const putHotelUpdate = (data, id) => {
    return (dispatch) => {
        axios
            .put(API_URL + `hotel/${id}`, data)
            .then((response) => {
                dispatch({
                    type: PUT_HOTEL_EDIT,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: PUT_HOTEL_EDIT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}