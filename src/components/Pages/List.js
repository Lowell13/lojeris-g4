import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";

class Home extends Component {
    render() {
        return (
            <section>
                <section>
                    <FilterBuildingsList orderTime={false} />
                </section>
            </section>
        );
    }
}

export default Home;
