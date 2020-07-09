import React, {Component} from 'react';

class PropsList extends Component {
    construct_elem(item_col) {
        return (
        );
    }

    construct_column(col_array) {
        let col_string = "";
        for (let item_col in col_array) {
            col_string += this.construct_elem(item_col);
        }
        return col_string;
    }

    render() {
        const { col_1, col_2, col_3, col_4 } = this.props;
        let col_1_string = this.construct_column(col_1);
        let col_2_string = this.construct_column(col_2);
        let col_3_string = this.construct_column(col_3);
        let col_4_string = this.construct_column(col_4);

        return (
            <div className="row">
                <div className="col-sm-3">
                    {col_1_string}
                </div>
                <div className="col-sm-3">
                    {col_2_string}
                </div>
                <div className="col-sm-3">
                    {col_3_string}
                </div>
                <div className="col-sm-3">
                    {col_4_string}
                </div>
            </div>
        );
    }
}

export default PropsList;
