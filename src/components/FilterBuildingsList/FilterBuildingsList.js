import React, {Component} from 'react';
import Filter from "./Filter/Filter";
import BuildingsList from "./BuildingsList/BuildingsList";

class FilterBuildingsList extends Component {
    render() {
        let col_1 = [];
        let col_2 = [];
        let col_3 = [];
        let col_4 = [];
        return (
            <div>
                <div>
                    <Filter />
                </div>
                <div>
                    <BuildingsList
                        col_1={col_1}
                        col_2={col_2}
                        col_3={col_3}
                        col_4={col_4}
                    />
                </div>
            </div>
        );
    }
}

export default FilterBuildingsList;
