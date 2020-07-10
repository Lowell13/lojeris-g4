import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Building extends Component {
    render() {
        const { building } = this.props;

        return (
<<<<<<< HEAD
            <article className="property">
                <Link to="">
                    <img src="https://i.ibb.co/s1Y8NcX/property-05.jpg" alt="{building.district.name}"></img>
                    <footer className="overlay">
                        <div className="info">
                            <div className="tag">{building.price} €</div>
=======
            <article class="property">
                <Link to="/" >
                    <img src="https://i.ibb.co/s1Y8NcX/property-05.jpg" alt="{building.district.name}" />
                    <footer class="overlay">
                        <div class="info">
                            <div class="tag">{building.price} €</div>
>>>>>>> b1035a5fa946ce7569b23bc29689914051c4392d
                            <h3>{building.district.name}</h3>
                        </div>
                        <div className="more-info">
                            <div className="property-info">
                                <i className="fa fa-calendar"> </i>
                                {building.createdAt.split('T')[0]}
                            </div>
                            <div className="property-info">
                                <i className="fa fa-tag"> </i>
                                {building.category.name}
                            </div>
                            <div className="property-info">
                                <i className="fa fa-expand"> </i>
                                {building.surface}m2
                            </div>
                            <div className="property-info">
                                <i className="fa fa-bed"> </i>
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
