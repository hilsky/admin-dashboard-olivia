import {
    CREATE_USER,
    GET_USER,
    UPDATE_USER,
    DELETE_USER
} from "../actions/types";

const initialState = [];

function userReducer(users = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_USER:
            return [...users, payload]

        case GET_USER:
            return payload;

        case UPDATE_USER:
            return users.map((user) => {
                if (user.id = payload.id) {
                    return {
                        ...user,
                        ...payload
                    }
                } else {
                    return user
                }
            })

        case DELETE_USER:
            return users.filter(({ id }) => id !== payload.id);

        default:
            return users;


    }
}

export default userReducer;