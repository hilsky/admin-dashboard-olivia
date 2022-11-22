import {
    GET_USER_DETAIL,
    GET_USER_LIST,
    DELETE_USER,
    PUT_USER_EDIT
} from "../actions/userAction";

let initialState = {
    getUserListResult: false,
    getUserLoading: false,
    getUserError: false,
    getUserDetailResult: false,
    getUserDetailError: false,
    getUserDetailLoading: false,
    userDeleteResult: false,
    userDeleteLoading: false,
    userDeleteError: false,
    getResponDataUser: false,
    errorResponDataUser: false,
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                getUserListResult: action.payload.data,
                getUserLoading: action.payload.loading,
                getUserError: action.payload.errorMessage
            }
        case GET_USER_DETAIL:
            return {
                ...state,
                getUserDetailResult: action.payload.data,
                getUserDetailError: action.payload.error,
                getUserDetailLoading: action.payload.loading
            }
        case PUT_USER_EDIT:
            return {
                ...state,
                getResponDataUser: action.payload.data,
                errorResponDataUser: action.payload.data
            }

        // case DELETE_USER:    
        //     return {
        //         ...state,
        //         userDeleteResult: action.payload.data,
        //         userDeleteLoading: action.payload.loading,
        //         userDeleteError: action.payload.error
        //     }
        default:
            return state;
    }
}

export default UserReducer;