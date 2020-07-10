export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const CATEGORIES_FORM_HANDLE_CHANGE = 'CATEGORIES_FORM_HANDLE_CHANGE';

export function fetchCategories() {
    return dispatch => {
        dispatch(fetchCategoriesRequest());
        fetch('http://lojeris.api.pierre-jehan.com/categories')
            .then(response => response.json())
            .then(data => dispatch(fetchCategoriesSuccess(data['hydra:member'])))
            .catch(err => dispatch(fetchCategoriesFailure(err)))
    }
}

export function fetchCategoriesRequest() {
    return { type: FETCH_CATEGORIES_REQUEST };
}

export function fetchCategoriesFailure(error) {
    return { type: FETCH_CATEGORIES_FAILURE, payload: error };
}

export function fetchCategoriesSuccess(categories) {
    return { type: FETCH_CATEGORIES_SUCCESS, payload: categories };
}

export function requestCategoriesHandleChange(name, value) {
    return {
        type: CATEGORIES_FORM_HANDLE_CHANGE,
        payload: { name: name, value: value }
    };
}
