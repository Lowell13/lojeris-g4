import React, {Component} from 'react';
import FilterBuildingsList from "../FilterBuildingsList/FilterBuildingsList";

class Home extends Component {
    render() {
        return (
            <section>
                <header class="home-banner">
                    <h1>Bienvenue chez <strong>Lojeris</strong></h1>
                    <p>Votre partenaire de confiance en immobilier</p>
                </header>
                <FilterBuildingsList />
            </section>
        );
    }
}

export default Home;
