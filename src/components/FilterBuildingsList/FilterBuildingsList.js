import React, {Component} from 'react';
import Filter from "./Filter/Filter";
import BuildingListContainer from "../../containers/BuildingListContainer";

class FilterBuildingsList extends Component {
    render() {
        const { nbMaxElem, page } = this.props;

        return (
            <div>
                {/*<div>*/}
                {/*    <Filter />*/}
                {/*</div>*/}
                <div>
                    <BuildingListContainer />
                </div>
            </div>
        );
    }
}

export default FilterBuildingsList;
