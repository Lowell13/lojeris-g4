import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";

class Home extends Component {
    render() {
        return (
            <section>
                <div>En-tête</div>
                <FilterBuildingsList
                    nbMaxElem={12}
                    page={1}
                />
            </section>
        );
    }
}

export default Home;
