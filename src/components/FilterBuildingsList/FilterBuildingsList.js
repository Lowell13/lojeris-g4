import React, {Component} from 'react';
import Filter from "./Filter/Filter";
import BuildingsList from "./BuildingsList/BuildingsList";
import {fetchBuildings} from "../../actions/building_action";

class FilterBuildingsList extends Component {
    render() {
        const { nbMaxElem, page } = this.props;
        let buildingsArrayAll = fetchBuildings();
        let buildingsArray1 = [];
        let buildingsArray2 = [];
        let buildingsArray3 = [];
        let buildingsArray4 = [];
        let buildingCtr = 0;
        for (let buildingItem in buildingsArrayAll) {
            if (buildingCtr < nbMaxElem) {
                switch (buildingCtr % 4) {
                    case 0:
                        buildingsArray1.push(buildingItem);
                        break;
                    case 1:
                        buildingsArray2.push(buildingItem);
                        break;
                    case 2:
                        buildingsArray3.push(buildingItem);
                        break;
                    case 3:
                        buildingsArray4.push(buildingItem);
                        break;
                }
            } else {
                break;
            }
            buildingCtr++;
        }
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
