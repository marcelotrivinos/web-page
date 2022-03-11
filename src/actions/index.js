import axios from "axios";
import {
    ADD_DATA_SUCCES,
    ADD_DATA_FAILURE,
    ADD_DATA_STARTED
} from "./types";

export const dataServer = () => {
    return dispatch => {
        
        dispatch(addDataStarted());

        axios.get('http://localhost:8080/data')
            .then(res => {
                dispatch(addDataSucces(res.data));
            })
            .catch(err => {
                dispatch(addDataFailure(err.message));
            });

    };
};

const addDataSucces = data => ({
    type:ADD_DATA_SUCCES,
    payload: { ...data }
});

const addDataStarted = () => ({
    type: ADD_DATA_STARTED
});

const addDataFailure = (error) => ({
    type: ADD_DATA_FAILURE,
    payload: { error }
});
