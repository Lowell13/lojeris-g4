import React, {Component} from 'react';;
import Building from "./Building/Building";

class BuildingsList extends Component {
    construct_content(buildingsArrayA, buildingsArrayB) {
        let buildingsList1 = buildingsArrayA.map(itemColA => (
            <Building building={itemColA} />
        ));
        let buildingsList2 = buildingsArrayB.map(itemColB => (
            <Building building={itemColB} />
        ));
        return (
            <div className="row">
                <div className="col-sm-6">
                    {buildingsList1}
                </div>
                <div className="col-sm-6">
                    {buildingsList2}
                </div>
            </div>
        );
    }

    render() {
        const { buildingsArray1, buildingsArray2, buildingsArray3, buildingsArray4 } = this.props;
        let buildingsListA = this.construct_content(buildingsArray1, buildingsArray2);
        let buildingsListB = this.construct_content(buildingsArray3, buildingsArray4);

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
}

export default BuildingsList;
