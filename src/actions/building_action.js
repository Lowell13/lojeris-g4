export const FETCH_BUILDINGS_REQUEST = 'FETCH_BUILDINGS_REQUEST';
export const FETCH_BUILDINGS_FAILURE = 'FETCH_BUILDINGS_FAILURE';
export const FETCH_BUILDINGS_SUCCESS = 'FETCH_BUILDINGS_SUCCESS';
export const CREATE_BUILDING_REQUEST = 'CREATE_BUILDING_REQUEST';
export const CREATE_BUILDING_FAILURE = 'CREATE_BUILDING_FAILURE';
export const CREATE_BUILDING_SUCCESS = 'CREATE_BUILDING_SUCCESS';
export const BUILDING_FORM_HANDLE_CHANGE = 'BUILDING_FORM_HANDLE_CHANGE';

export function fetchBuildings() {
    return dispatch => {
        dispatch(fetchBuildingsRequest());
        fetch('http://lojeris.api.pierre-jehan.com/properties')
            .then(response => response.json())
            .then(data => dispatch(fetchBuildingsSuccess(data['hydra:member'])))
            .catch(err => dispatch(fetchBuildingsFailure(err)))
    }
}

export function fetchBuildingsRequest() {
    return { type: FETCH_BUILDINGS_REQUEST };
}

export function fetchBuildingsFailure(error) {
    return { type: FETCH_BUILDINGS_FAILURE, payload: error };
}

export function fetchBuildingsSuccess(buildings) {
    return { type: FETCH_BUILDINGS_SUCCESS, payload: buildings };
}

export function createBuilding() {
    return (dispatch, getState) => {
        const BuildingFormData = getState().buildings.BuildingForm;
        dispatch(createBuildingRequest());
        fetch('http://lojeris.api.pierre-jehan.com/properties', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(BuildingFormData)
        })
            .then(response => {
                if (response.status === 201) {
                    return response.json();
                } else {
                    dispatch(createBuildingFailure(response.statusText));
                }
            })
            .then(data => dispatch(createBuildingSuccess(data)))
            .catch(err => dispatch(createBuildingFailure(err)))
    }
}

export function createBuildingRequest() {
    return { type: CREATE_BUILDING_REQUEST };
}

export function createBuildingFailure(error) {
    return { type: CREATE_BUILDING_FAILURE, payload: error };
}

export function createBuildingSuccess(building) {
    return { type: CREATE_BUILDING_SUCCESS, payload: building };
}

export function buildingFormHandleChange(name, value) {
    return {
        type: BUILDING_FORM_HANDLE_CHANGE,
        payload: { name: name, value: value }
    };
}
