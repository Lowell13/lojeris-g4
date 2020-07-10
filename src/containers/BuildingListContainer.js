import { connect } from 'react-redux';
import BuildingsList from "../components/FilterBuildingsList/BuildingsList/BuildingsList";

const mapStateToProps = (state, ownProps) => ({
    buildings: state.buildings.buildings,
    categorySelected: state.categories.categorySelected,
    districtSelected: state.districts.districtSelected,
    orderTime: ownProps.orderTime
});

export default connect(
    mapStateToProps
)(BuildingsList);
