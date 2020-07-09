import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Building extends Component {
    render() {
        const { building } = this.props;
        console.log();

        return (
            <article class="property">
                <Link >
                    <img src="images/property-02.jpg" alt="Brequigny"></img>
                    <footer class="overlay">
                        <div class="info">
                            <div class="tag">{building.price} €</div>
                            <h3>{building.district.name}</h3>
                        </div>
                        <div class="more-info">
                            <div class="property-info">
                                <i class="fa fa-calendar"></i>
                                {building.createdAt.split('T')[0]}
                            </div>
                            <div class="property-info">
                                <i class="fa fa-tag"></i>
                                {building.category.name}
                            </div>
                            <div class="property-info">
                                <i class="fa fa-expand"></i>
                                {building.surface}m2
                            </div>
                            <div class="property-info">
                                <i class="fa fa-bed"></i>
                                {building.bedroom}
                            </div>
                        </div>
                    </footer>
                </Link>
            </article>
        );
    }
}

export default Building;
