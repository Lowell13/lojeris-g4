import React from 'react';
import Building from "./Building/Building";

function BuildingsList(props) {
    const { buildings } = props;

    let listBuilding = [];
    buildings.map(building => listBuilding.push(<Building building={building} />));

    return (
        <div class="properties">
            {listBuilding}
        </div>
    );
}

export default BuildingsList;
