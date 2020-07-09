import { connect } from 'react-redux';
import Filter from '../components/FilterBuildingsList/Filter/Filter';

const mapStateToProps = (state, ownProps) => ({
    districts: state.districts.districts
});

export default connect(
    mapStateToProps
)(Filter);
