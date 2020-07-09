import React, {Component} from 'react';
import Filter from "./Filter/Filter";
import PropsList from "./PropsList/PropsList";

class FilterPropsList extends Component {
    render() {
        let col_1 = [];
        let col_2 = [];
        let col_3 = [];
        let col_4 = [];
        return (
            <div>
                <div>
                    <Filter />
                </div>
                <div>
                    <PropsList
                        col_1={col_1}
                        col_2={col_2}
                        col_3={col_3}
                        col_4={col_4}
                    />
                </div>
            </div>
        );
    }
}

export default FilterPropsList;
