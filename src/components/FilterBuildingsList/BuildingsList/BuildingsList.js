import React from 'react';
import Building from "./Building/Building";

function BuildingsList(props) {
    const { buildings, nbMaxBuilding } = props;

    let listBuilding = [];
    let ctrBuilding = 0;
    buildings.map(building => {
        if (ctrBuilding < nbMaxBuilding) {
            listBuilding.push(<Building building={building} />);
        }
        ctrBuilding++;
    });

    return (
        <div class="properties">
            {listBuilding}
        </div>
    );
}

export default BuildingsList;
