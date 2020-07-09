import React, {Component} from 'react';
import BuildingListContainer from "../../containers/BuildingListContainer";
import CategoryFilterContainer from "../../containers/CategoryFilterContainer";

class FilterBuildingsList extends Component {
    render() {
        return (
            <div>
                <div>
                    <CategoryFilterContainer />
                </div>
                <div>
                    <BuildingListContainer/>
                </div>
            </div>
        );
    }
}

export default FilterBuildingsList;
