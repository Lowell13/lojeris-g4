import { connect } from 'react-redux';
import FilterCategory from '../components/FilterBuildingsList/Filter/FilterCategory';
import {requestCategoriesHandleChange} from "../actions/category_action";

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (name, value) => dispatch(requestCategoriesHandleChange(name, value))
    // handleSubmit: () => dispatch(createBuilding())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterCategory);
