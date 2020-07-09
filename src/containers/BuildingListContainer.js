import { connect } from 'react-redux';
import BuildingList from '../components/FilterBuildingsList/BuildingsList/BuildingsList';

const mapStateToProps = (state, ownProps) => ({
    building: state.buildings.buildings
});

export default connect(
    mapStateToProps
)(BuildingList);
