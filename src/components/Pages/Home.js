import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";
import Footer from "./Footer/Footer";

class Home extends Component {
    render() {
        return (
            <section>
                <div>Menu</div>
                <div>En-tête</div>
                <FilterBuildingsList />
                <Footer />
            </section>
        );
    }
}

export default Home;
