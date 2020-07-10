import {
    FETCH_DISTRICTS_FAILURE,
    FETCH_DISTRICTS_REQUEST,
    FETCH_DISTRICTS_SUCCESS,
    DISTRICTS_FORM_HANDLE_CHANGE
} from '../actions/district_action';

const initialRequestFormState = {
    district: '',
};

const initialState = {
    loading: false,
    error: null,
    districts: [],
    districtForm: initialRequestFormState
};

function districts(state = initialState, action) {
    switch (action.type) {
        case FETCH_DISTRICTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_DISTRICTS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case FETCH_DISTRICTS_SUCCESS:
            return { ...state, districts: action.payload, loading: false };
        case DISTRICTS_FORM_HANDLE_CHANGE:
            return {
                ...state,
                districtForm: {
                    ...state.districtForm,
                    [action.payload.name]: action.payload.value
                }
            };
        default:
            return state;
    }
}

export default districts;