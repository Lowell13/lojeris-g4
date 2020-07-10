import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";

class Home extends Component {
    render() {
        return (
            <section>
                <FilterBuildingsList orderTime={true} />
            </section>
        );
    }
}

export default Home;
