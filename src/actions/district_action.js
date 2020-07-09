export const FETCH_DISTRICTS_REQUEST = 'FETCH_DISTRICTS_REQUEST';
export const FETCH_DISTRICTS_FAILURE = 'FETCH_DISTRICTS_FAILURE';
export const FETCH_DISTRICTS_SUCCESS = 'FETCH_DISTRICTS_SUCCESS';

export function fetchDistricts() {
    return dispatch => {
        dispatch(fetchDistrictsRequest());
        fetch(process.env.BASE_API_URL + '/districts')
            .then(response => response.json())
            .then(data => dispatch(fetchDistrictsSuccess(data['hydra:member'])))
            .catch(err => dispatch(fetchDistrictsFailure(err)))
    }
}

export function fetchDistrictsRequest() {
    return { type: FETCH_DISTRICTS_REQUEST };
}

export function fetchDistrictsFailure(error) {
    return { type: FETCH_DISTRICTS_FAILURE, payload: error };
}

export function fetchDistrictsSuccess(districts) {
    return { type: FETCH_DISTRICTS_SUCCESS, payload: districts };
}
