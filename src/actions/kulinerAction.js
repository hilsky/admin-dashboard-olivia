import axios from "axios";

export const GET_KULINER_LIST = "GET_KULINER_LIST";
export const GET_KULINER_DETAIL = "GET_KULINER_DETAIL";
export const DELETE_KULINER = "DELETE_KULINER";

export const getKulinerList = () => {
    return (dispatch) => {
        axios
            .get("https://desolate-crag-78080.herokuapp.com/kuliner")
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
            .get("https://desolate-crag-78080.herokuapp.com/kuliner/" + id)
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
            .delete("https://desolate-crag-78080.herokuapp.com/kuliner/" + id)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}