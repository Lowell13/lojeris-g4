import { connect } from 'react-redux';
import BuildingForm from '../components/BuildingForm';
import { buildingFormHandleChange, createBuilding } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({
    building: state.buildings.buildingForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (name, value) => dispatch(buildingFormHandleChange(name, value)),
    handleSubmit: () => dispatch(createBuilding())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BuildingForm);
