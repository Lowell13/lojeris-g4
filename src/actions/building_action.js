import features from "../reducers/features";

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
    // Commented because pictures doesn't work currently.
    // We probably can also do this cleaner, but first I wanna see if this works.
    /*buildings.map(b => {
        b.picture = fetch('http://lojeris.api.pierre-jehan.com/media_objects/' + b.picture.id)
    });*/
    return { type: FETCH_BUILDINGS_SUCCESS, payload: buildings };
}

export function createBuilding(props) {
    const { buildings, categories, districts, features } = props;

    return (dispatch, getState) => {
        const buildingFormData = getState().buildings.buildingForm;

       categories.map(c => {
            if (c.name === buildingFormData.category.name) {
                buildingFormData.category.name = c.name;
                buildingFormData.category.properties = c.properties;
            }
        });
        districts.map(d => {
            if (d.name === buildingFormData.district) {
                buildingFormData.district = d;
            }
        });
        buildings.map(b => {
            buildingFormData.picture = b.picture.contentUrl;
        });
        features.map(f => {
            buildingFormData.features.push(f);
        })
        buildingFormData.bedroom = parseInt(buildingFormData.bedroom, 10);

        console.log("Form :");
        console.log(buildingFormData);


        dispatch(createBuildingRequest());
        fetch('http://lojeris.api.pierre-jehan.com/properties', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buildingFormData)
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
