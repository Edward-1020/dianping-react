import {get} from '../../util/request';
import url from '../../util/url';
import { FETCH_DATA } from '../middleware/api';
import { schema } from './entities/products';

export const types = {
    FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST",
    FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
    FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE"
}

export const action = {
    loadLikes: () => {
        return (dispatch, getState) => {
            const endpoint = url.getProductList(0, 10);
            return dispatch(fetchLikes(endpoint));
        }
    }
}

const fetchLikes = endpoint => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_LIKES_REQUEST,
            types.FETCH_LIKES_SUCCESS,
            types.FETCH_LIKES_FAILURE
        ]
    },
    endpoint,
    schema
})

const reducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_LIKES_REQUEST:
        case types.FETCH_LIKES_SUCCESS:
        case types.FETCH_LIKES_FAILURE:
        default:
            return state;
    }
    return state;
}

export default reducer;
