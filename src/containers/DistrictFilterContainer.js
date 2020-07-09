import { connect } from 'react-redux';
import FilterDistrict from '../components/FilterBuildingsList/Filter/FilterDistrict';

const mapStateToProps = (state, ownProps) => ({
    districts: state.districts.districts
});

export default connect(
    mapStateToProps
)(FilterDistrict);
