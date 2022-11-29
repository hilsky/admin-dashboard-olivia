import {
    CREATE_KULINER,
    GET_KULINER,
    UPDATE_KULINER,
    DELETE_KULINER
} from "../actions/types";

const initialState = [];

function kuliner(kuliner = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_KULINER:
            return [...kuliner, payload]

        case GET_KULINER:
            return payload;

        case UPDATE_KULINER:
            return kuliner.map((kuliner) => {
                if (kuliner.id = payload.id) {
                    return {
                        ...kuliner,
                        ...payload
                    }
                } else {
                    return kuliner
                }
            })

        case DELETE_KULINER:
            return kuliner.filter(({ id }) => id !== payload.id);

        default:
            return kuliner;


    }
}

export default kuliner;