import {
    ADD_DATA_SUCCES,
    ADD_DATA_FAILURE,
    ADD_DATA_STARTED
} from "../actions/types";

const initialState = {
    data: {
        categories: [],
        products: [{}]
    },
    loading: false,
    error: null
};

export function modelReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_DATA_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_DATA_SUCCES:
            return {
                ...state,
                data: { ...action.payload },
                loading: false,
                error: null,
            };
        case ADD_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}