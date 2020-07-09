import React from 'react';
import Building from "./Building/Building";
import {Link} from "react-router-dom";

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

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div style={{width: "20%"}}> {buildingsArray1} </div>
                <div style={{width: "20%"}}> {buildingsArray2} </div>
                <div style={{width: "20%"}}> {buildingsArray3} </div>
                <div style={{width: "20%"}}> {buildingsArray4} </div>
            </div>
        </div>
    );
}

export default BuildingsList;
