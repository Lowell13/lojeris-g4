import {
    FETCH_FEATURES_FAILURE,
    FETCH_FEATURES_REQUEST,
    FETCH_FEATURES_SUCCESS
} from '../actions/feature_action';

const initialState = {
    loading: false,
    error: null,
    features: [],
};

function features(state = initialState, action) {
    switch (action.type) {
        case FETCH_FEATURES_REQUEST:
            return { ...state, loading: true };
        case FETCH_FEATURES_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case FETCH_FEATURES_SUCCESS:
            return { ...state, features: action.payload, loading: false };
        default:
            return state;
    }
}

export default features;