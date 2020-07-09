import { combineReducers } from 'redux';
import buildings from './buildings';
import categories from './categories';
import districts from './districts';
import features from './features';

export default combineReducers({
    buildings,
    categories,
    districts,
    features
});
