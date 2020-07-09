import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

class Home extends Component {
    render() {
        return (
            <section>
                <Nav />
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
