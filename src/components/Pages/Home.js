import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";

class Home extends Component {
    render() {
        return (
            <section>
                <FilterBuildingsList nbMaxBuilding={12} />
            </section>
        );
    }
}

export default Home;
