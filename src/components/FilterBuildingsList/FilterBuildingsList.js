import React, {Component} from 'react';
import Filter from "./Filter/Filter";
import BuildingsList from "./BuildingsList/BuildingsList";

class FilterBuildingsList extends Component {
    render() {
        let buildingsArray1 = [];
        let buildingsArray2 = [];
        let buildingsArray3 = [];
        let buildingsArray4 = [];
        return (
            <div>
                <div>
                    <Filter />
                </div>
                <div>
                    <BuildingsList
                        buildingsArray1={buildingsArray1}
                        buildingsArray2={buildingsArray2}
                        buildingsArray3={buildingsArray3}
                        buildingsArray4={buildingsArray4}
                    />
                </div>
            </div>
        );
    }
}

export default FilterBuildingsList;
