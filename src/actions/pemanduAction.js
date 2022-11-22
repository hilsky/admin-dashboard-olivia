import axios from "axios";

export const GET_PEMANDU_LIST = "GET_PEMANDU_LIST";
export const GET_PEMANDU_DETAIL = "GET_PEMANDU_DETAIL";
export const DELETE_PEMANDU = "DELETE_PEMANDU";

export const getPemanduList = () => {
    return (dispatch) => {
        axios
            .get("https://desolate-crag-78080.herokuapp.com/guide")
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
            .get("https://desolate-crag-78080.herokuapp.com/guide/" + id)
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
            .delete("https://desolate-crag-78080.herokuapp.com/guide/" + id)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}