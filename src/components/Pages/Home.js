import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";
import Footer from "./Footer/Footer";

class Home extends Component {
    render() {
        return (
            <section>
                <div>Menu</div>
                <div>En-tête</div>
                <FilterBuildingsList
                    nbMaxElem={12}
                    page={1}
                />
                <Footer />
            </section>
        );
    }
}

export default Home;
