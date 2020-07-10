import React from 'react';
import Building from "./Building/Building";

function BuildingsList(props) {
    const { buildings, nbMaxBuilding } = props;

    let listBuilding = [];
    let ctrBuilding = 0;
    buildings.map((building, key) => {
        if (ctrBuilding < nbMaxBuilding) {
<<<<<<< HEAD
            listBuilding.push(<Building building={building} key={key}/>);
=======
            listBuilding.push(<Building key={ctrBuilding} building={building} />);
>>>>>>> b1035a5fa946ce7569b23bc29689914051c4392d
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
