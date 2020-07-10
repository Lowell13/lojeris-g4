import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    CATEGORIES_FORM_HANDLE_CHANGE
} from '../actions/category_action';

const initialRequestFormState = {
    category: '',
};

const initialState = {
    loading: false,
    error: null,
    categories: [],
    categoryForm: initialRequestFormState
};

function categories(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return { ...state, loading: true };
        case FETCH_CATEGORIES_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, loading: false };
        case CATEGORIES_FORM_HANDLE_CHANGE:
            return {
                ...state,
                categoryForm: {
                    ...state.categoryForm,
                    [action.payload.name]: action.payload.value
                }
            };
        default:
            return state;
    }
}

export default categories;