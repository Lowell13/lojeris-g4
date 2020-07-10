import React, { Component } from 'react';
import BuildingListContainer from "../../containers/BuildingListContainer";
import CategoryFilterContainer from "../../containers/CategoryFilterContainer";
import DistrictFilterContainer from '../../containers/DistrictFilterContainer';

class FilterBuildingsList extends Component {
    render() {
        const { orderTime } = this.props;

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
                    <BuildingListContainer orderTime={orderTime} />
                </div>
            </div>
        );
    }
}

export default FilterBuildingsList;
