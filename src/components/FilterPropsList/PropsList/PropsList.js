import React, {Component} from 'react';

class FilterPropsList extends Component {
    render() {
        const { col_1, col_2, col_3, col_4 } = this.props;

        return (
            <div className='row'>
                <div className='col-sm-3'>
                    {col_1}
                </div>
                <div className='col-sm-3'>
                    {col_2}
                </div>
                <div className='col-sm-3'>
                    {col_3}
                </div>
                <div className='col-sm-3'>
                    {col_4}
                </div>
            </div>
        );
    }
}

export default FilterPropsList;
