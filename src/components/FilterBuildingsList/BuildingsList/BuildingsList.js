import React, {Component} from 'react';;
import Building from "./Building/Building";

class BuildingsList extends Component {
    construct_content(col_array) {
        let elemsListA = col_array.map(itemColA => (
            <Building prop={itemColA} />
        ));
        let elemsListB = col_array.map(itemColB => (
            <Building prop={itemColB} />
        ));
        return (
            <div className="row">
                <div className="col-sm-6">
                    {elemsListA}
                </div>
                <div className="col-sm-6">
                    {elemsListB}
                </div>
            </div>
        );
    }

    render() {
        const { col_1, col_2, col_3, col_4 } = this.props;
        let col_1_2 = this.construct_content(col_1, col_2);
        let col_3_4 = this.construct_content(col_3, col_4);

        return (
            <div className="row">
                <div className="col-md-6">
                    {col_1_2}
                </div>
                <div className="col-md-6">
                    {col_3_4}
                </div>
            </div>
        );
    }
}

export default BuildingsList;
