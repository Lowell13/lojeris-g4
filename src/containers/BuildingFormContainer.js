import { connect } from 'react-redux';
import BuildingForm from '../components/BuildingForm';
import { buildingFormHandleChange, createBuilding } from '../actions/building_action';

const mapStateToProps = (state, ownProps) => ({
    building: state.buildings.buildingForm,
    categorySelected: state.categories.categorySelected,
    districtSelected: state.districts.districtSelected,
    categories: state.categories.categories,
    districts: state.districts.districts,
    buildings: state.buildings.buildings,
    features: state.features.features,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (name, value) => dispatch(buildingFormHandleChange(name, value)),
    handleSubmit: (props) => dispatch(createBuilding(props))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BuildingForm);
