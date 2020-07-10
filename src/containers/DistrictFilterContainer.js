import { connect } from 'react-redux';
import FilterDistrict from '../components/FilterBuildingsList/Filter/FilterDistrict';
import {requestDistrictsHandleChange} from "../actions/district_action";

const mapStateToProps = (state, ownProps) => ({
    districts: state.districts.districts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (name, value) => dispatch(requestDistrictsHandleChange(name, value))
    // handleSubmit: () => dispatch(requestDistrictsHandleChange())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterDistrict);
