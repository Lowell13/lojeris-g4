import {
    FETCH_BUILDINGS_REQUEST,
    FETCH_BUILDINGS_FAILURE,
    FETCH_BUILDINGS_SUCCESS,
    CREATE_BUILDING_REQUEST,
    CREATE_BUILDING_FAILURE,
    CREATE_BUILDING_SUCCESS,
    BUILDING_FORM_HANDLE_CHANGE,
} from '../actions/building_action';

const initialBuildingFormState = {
    price: '0',
    surface: 0,
    bedroom: 0,
    description: '',
    picture: null, // Picture is null for the moment so it doesn't break anything and we can try our code. Will change it when /media_objects will work
    category: { name : '' , properties: '' },
    district: '',
    features: [],
    createdAt: "2020-07-14T15:04:25.209Z",
};

const initialState = {
    loading: false,
    error: null,
    buildings: [],
    buildingForm: initialBuildingFormState
};

function buildings(state = initialState, action) {
    switch (action.type) {
        case FETCH_BUILDINGS_REQUEST:
            return { ...state, loading: true };
        case FETCH_BUILDINGS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case FETCH_BUILDINGS_SUCCESS:
            return { ...state, buildings: action.payload, loading: false };
        case BUILDING_FORM_HANDLE_CHANGE:
            return {
                ...state,
                buildingForm: {
                    ...state.buildingForm,
                    [action.payload.name]: action.payload.value
                }
            };
        case CREATE_BUILDING_REQUEST:
            return { ...state, loading: true };
        case CREATE_BUILDING_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case CREATE_BUILDING_SUCCESS:
            return {
                ...state,
                buildings: [ ...state.buildings, action.payload ],
                buildingForm: initialBuildingFormState,
                loading: false
            };
        default:
            return state;
    }
}

export default buildings;
