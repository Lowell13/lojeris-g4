import React, {Component} from 'react';
import Filter from "./Filter/Filter";
import PropsList from "./PropsList/PropsList";

class FilterPropsList extends Component {
    render() {
        return (
            <div>
                <div>
                    <Filter />
                </div>
                <div>
                    <PropsList />
                </div>
            </div>
        );
    }
}

export default FilterPropsList;
