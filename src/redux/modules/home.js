import {get} from '../../util/request';
import url from '../../util/url';

export const types = {
    FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST",
    FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
    FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE"
}

export const action = {
    loadLikes: () => {
        return (dispath, getState) => {
            dispath(fetchLikesRequest());
            return get(
                url.getProductList(0, 10)
                    .then(
                        data => {
                            dispath(fetchLikesSuccess(data));
                        },
                        error => {
                            dispath(fetchLikesFailure(error));
                        }
                    )
            );
        }
    }
}

const fetchLikesRequest = () => ({
    types: types.FETCH_LIKES_REQUEST
})
const fetchLikesSuccess = (data) => ({
    types: types.FETCH_LIKES_SUCCESS,
    data
})
const fetchLikesFailure = (error) => ({
    types: types.FETCH_LIKES_FAILURE,
    error
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
