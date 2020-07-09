import React, {Component} from 'react';
import Filter from "./Filter/Filter";
import BuildingsList from "./BuildingsList/BuildingsList";
import {fetchBuildings} from "../../actions/building_action";

class FilterBuildingsList extends Component {
    render() {
        const { nbMaxElem, page } = this.props;

        return (
            <div>
                <div>
                    <Filter />
                </div>
                <div>
                    <BuildingsList />
                </div>
            </div>
        );
    }
}

export default FilterBuildingsList;
