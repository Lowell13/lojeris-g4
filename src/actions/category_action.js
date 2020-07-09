export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';

export function fetchCategories() {
    return dispatch => {
        dispatch(fetchCategoriesRequest());
        fetch(process.env.BASE_API_URL + '/categories')
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