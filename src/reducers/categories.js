import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS
} from '../actions/category_action';

const initialState = {
    loading: false,
    error: null,
    categories: [],
};

function categories(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return { ...state, loading: true };
        case FETCH_CATEGORIES_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, loading: false };
        default:
            return state;
    }
}

export default categories;