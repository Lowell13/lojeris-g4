import React from 'react';
import Building from "./Building/Building";

function BuildingsList(props) {
    const { buildings } = props;

    let buildingsArray1 = [], buildingsArray2 = [], buildingsArray3 = [], buildingsArray4 = [];
    let buildingCtr = 0;
    buildings.map(b => {
        switch (buildingCtr % 4) {
            case 0:
                buildingsArray1.push(<Building building={b} />);
                break;
            case 1:
                buildingsArray2.push(<Building building={b} />);
                break;
            case 2:
                buildingsArray3.push(<Building building={b} />);
                break;
            case 3:
                buildingsArray4.push(<Building building={b} />);
                break;
        }
        buildingCtr++;
    });

    const buildingsListA = (
        <div className="row">
            <div className="col-sm-6">
                {buildingsArray1}
            </div>
            <div className="col-sm-6">
                {buildingsArray2}
            </div>
        </div>
    );

    const buildingsListB = (
        <div className="row">
            <div className="col-sm-6">
                {buildingsArray3}
            </div>
            <div className="col-sm-6">
                {buildingsArray4}
            </div>
        </div>
    );

    return (
        <div className="row">
            <div className="col-md-6">
                {buildingsListA}
            </div>
            <div className="col-md-6">
                {buildingsListB}
            </div>
        </div>
    );
}

export default BuildingsList;
