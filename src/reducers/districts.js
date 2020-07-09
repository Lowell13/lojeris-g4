import {
    FETCH_DISTRICTS_FAILURE,
    FETCH_DISTRICTS_REQUEST,
    FETCH_DISTRICTS_SUCCESS
} from '../actions/district_action';

const initialState = {
    loading: false,
    error: null,
    districts: [],
};

function districts(state = initialState, action) {
    switch (action.type) {
        case FETCH_DISTRICTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_DISTRICTS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case FETCH_DISTRICTS_SUCCESS:
            return { ...state, districts: action.payload, loading: false };
        default:
            return state;
    }
}

export default districts;