import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Building extends Component {
    render() {
        const { building } = this.props;
        console.log();

        return (
            <Link className="text-white">
                <p style={{color: "white", backgroundColor: "#ffc107"}}>{building.price} €</p>
                <p style={{color: "white", textDecoration: "none"}}>{building.district.name}</p>
                <div className="d-flex justify-content-between" style={{backgroundColor: '#073855'}}>
                    {/*<p style={{color: "white", textDecoration: "none"}}>{building.createdAt}</p>*/}
                    <p style={{color: "white", textDecoration: "none"}}>{building.category.name}</p>
                    <p style={{color: "white", textDecoration: "none"}}>{building.surface}</p>
                    <p style={{color: "white", textDecoration: "none"}}>{building.bedroom}</p>
                </div>
            </Link>
        );
    }
}

export default Building;
