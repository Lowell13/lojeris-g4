export const FETCH_FEATURES_REQUEST = 'FETCH_FEATURES_REQUEST';
export const FETCH_FEATURES_FAILURE = 'FETCH_FEATURES_FAILURE';
export const FETCH_FEATURES_SUCCESS = 'FETCH_FEATURES_SUCCESS';

export function fetchFeatures() {
    return dispatch => {
        dispatch(fetchFeaturesRequest());
        fetch(process.env.BASE_API_URL + '/features')
            .then(response => response.json())
            .then(data => dispatch(fetchFeaturesSuccess(data['hydra:member'])))
            .catch(err => dispatch(fetchFeaturesFailure(err)))
    }
}

export function fetchFeaturesRequest() {
    return { type: FETCH_FEATURES_REQUEST };
}

export function fetchFeaturesFailure(error) {
    return { type: FETCH_FEATURES_FAILURE, payload: error };
}

export function fetchFeaturesSuccess(features) {
    return { type: FETCH_FEATURES_SUCCESS, payload: features };
}