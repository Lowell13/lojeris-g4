import { connect } from 'react-redux';
import BuildingsList from "../components/FilterBuildingsList/BuildingsList/BuildingsList";

const mapStateToProps = (state, ownProps) => ({
    buildings: state.buildings.buildings
});

export default connect(
    mapStateToProps
)(BuildingsList);
