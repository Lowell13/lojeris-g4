import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";

class Home extends Component {
    render() {
        return (
            <section>
                <div>En-tête</div>
                <FilterBuildingsList />
            </section>
        );
    }
}

export default Home;
