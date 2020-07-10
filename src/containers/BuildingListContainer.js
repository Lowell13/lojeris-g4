import { connect } from 'react-redux';
import BuildingsList from "../components/FilterBuildingsList/BuildingsList/BuildingsList";

const mapStateToProps = (state, ownProps) => ({
    buildings: state.buildings.buildings,
    categorySelected: state.buildings.categorySelected,
    districtSelected: state.buildings.districtSelected,
    nbMaxBuilding: ownProps.nbMaxBuilding
});

export default connect(
    mapStateToProps
)(BuildingsList);
