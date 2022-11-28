import axios from "axios";

export const GET_WISATA_LIST = "GET_WISATA_LIST";
export const GET_WISATA_DETAIL = "GET_WISATA_DETAIL";
export const DELETE_WISATA = "DELETE_WISATA";
export const PUT_WISATA_EDIT = "PUT_WISATA_EDIT";

export const getWisataList = () => {
    return (dispatch) => {
        axios
            .get("https://desolate-crag-78080.herokuapp.com/wisata")
            .then((response) => {
                dispatch({
                    type: GET_WISATA_LIST,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_WISATA_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const getWisataDetail = (id) => {
    return (dispatch) => {
        axios
            .get("https://desolate-crag-78080.herokuapp.com/wisata/" + id)
            .then((response) => {
                dispatch({
                    type: GET_WISATA_DETAIL,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_WISATA_DETAIL,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const deleteWisata = (id) => {
    return (dispatch) => {
        axios
            .delete("https://desolate-crag-78080.herokuapp.com/wisata/" + id)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const updateWisata = (data, id) => {
    return (dispatch) => {
        axios
            .put("https://desolate-crag-78080.herokuapp.com/wisata/" + id, data)
            .then((response) => {
                dispatch({
                    type: PUT_WISATA_EDIT,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: PUT_WISATA_EDIT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}