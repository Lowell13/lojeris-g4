import { connect } from 'react-redux';
import BuildingsList from "../components/FilterBuildingsList/BuildingsList/BuildingsList";

const mapStateToProps = (state, ownProps) => ({
    buildings: state.buildings.buildings,
    nbMaxBuilding: ownProps.nbMaxBuilding
});

export default connect(
    mapStateToProps
)(BuildingsList);
