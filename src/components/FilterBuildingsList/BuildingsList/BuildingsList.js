import React from 'react';
import Building from "./Building/Building";

function BuildingsList(props) {
    const { buildings, categorySelected, districtSelected } = props;

    let listBuildingWithoutTime = [];
    buildings.map((building, key) => {
        let categoryValid = false;
        let districtValid = false;

        if (categorySelected === building.category.name || categorySelected === "none") {
            categoryValid = true;
        }
        if (districtSelected === building.district.name || districtSelected === "none") {
            districtValid = true;
        }
        if (categoryValid && districtValid) {
            listBuildingWithoutTime.push(<Building building={building} key={key}/>);
        }
    });
    let listBuildingWithTime = checkListBuilding(listBuildingWithoutTime, props);

    return (
        <div className="wrapping">
            <div className="properties">
                {listBuildingWithTime}
            </div>
        </div>
    );
}

function checkListBuilding(listBuilding, props) {
    const { orderTime } = props;

    let ctrBuilding = 0;
    let listBuildingReturn = [];
    listBuilding.map((building, key) => {
        if (orderTime) {
            if (listBuildingReturn.length === 12) {
                let keyElderDate = getElderDate(listBuildingReturn);
                let dateElder = listBuilding[keyElderDate].props.building.createdAt;
                let dateRecent = building.props.building.createdAt;
                if (checkDate(dateElder, dateRecent)) {
                }
            } else {
                listBuildingReturn.push(building);
            }
        } else {
            if (ctrBuilding < 42) {
                listBuildingReturn.push(building);
                ctrBuilding++;
            }
        }
    });
    return listBuildingReturn;
}

function getElderDate(listBuildingElder) {
    let buildingDateOld;
    let buildingKeyReturn = -1;
    listBuildingElder.map((buildingElder, key) => {
        let buildingDateNew = buildingElder.props.building.createdAt;
        if (buildingKeyReturn < 0) {
            buildingKeyReturn = key;
            buildingDateOld = buildingDateNew;
        } else {
            if (checkDate(buildingDateNew, buildingDateOld)) {
                buildingDateOld = buildingDateNew;
                buildingKeyReturn = key;
            }
        }
    });
    return buildingKeyReturn;
}

function checkDate(firstDate, secondDate) {
    if(getDate(firstDate) < getDate(secondDate)) {
        return true;
    }
    return false;
}

function getDate(dateString) {
    let date = new Date();

    /* date */
    let dateDate = dateString.split('T')[0].split('-');
    date.setFullYear(dateDate[0]);
    date.setMonth(dateDate[1]);
    date.setDate(dateDate[2]);

    /* time */
    let dateTime = dateString.split('T')[1].split('+')[0].split(':');
    date.setHours(dateTime[0]);
    date.setMinutes(dateTime[1]);
    date.setSeconds(dateTime[2]);

    console.log('date : ' + dateDate);
    console.log('time : ' + dateTime);
    console.log('converti : ' + date.getTime());

    return date.getTime();
}

export default BuildingsList;
