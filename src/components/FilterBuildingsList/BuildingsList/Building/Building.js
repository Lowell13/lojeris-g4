import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Building extends Component {
    render() {
        const { building } = this.props;

        return (
            <Link className="text-white">
                <p className="bg-warning">{building.price} €</p>
                <p>{building.district}</p>
                <div className="d-flex justify-content-between" style={{backgroundColor: '#073855'}}>
                    <p>{building.createdAt}</p>
                    <p>{building.category}</p>
                    <p>{building.surface}</p>
                    <p>{building.bedroom}</p>
                </div>
            </Link>
        );
    }
}

export default Building;
