import React, { Component } from 'react';
import BuildingListContainer from "../../containers/BuildingListContainer";
import CategoryFilterContainer from "../../containers/CategoryFilterContainer";
import DistrictFilterContainer from '../../containers/DistrictFilterContainer';

class FilterBuildingsList extends Component {
    render() {
        const { nbMaxBuilding } = this.props;

        return (
            <div>
                <div>
                    <form>
                        <fieldset>
                            <legend>Filtres :</legend>
                            <CategoryFilterContainer />
                            <DistrictFilterContainer />
                        </fieldset>
                    </form>
                </div>
                <div>
                    <BuildingListContainer nbMaxBuilding={nbMaxBuilding} />
                </div>
            </div>
        );
    }
}

export default FilterBuildingsList;
