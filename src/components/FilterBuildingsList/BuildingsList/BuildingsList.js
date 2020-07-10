import React from 'react';
import Building from "./Building/Building";

function BuildingsList(props) {
    const { buildings, nbMaxBuilding } = props;

    let listBuilding = [];
    let ctrBuilding = 0;
    buildings.map((building, key) => {
        if (ctrBuilding < nbMaxBuilding) {
            listBuilding.push(<Building building={building} key={key}/>);
        }
        ctrBuilding++;
        return null;
    });

    return (
        <div className="wrapping">
            <div className="properties">
                {listBuilding}
            </div>
        </div>
    );
}

export default BuildingsList;
