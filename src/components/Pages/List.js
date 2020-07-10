import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";

class Home extends Component {
    render() {
        return (
            <section>
                <section>
                    <FilterBuildingsList nbMaxBuilding={28} />
                </section>
            </section>
        );
    }
}

export default Home;
