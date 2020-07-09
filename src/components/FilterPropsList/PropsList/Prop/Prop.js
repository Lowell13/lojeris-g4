import React, {Component} from 'react';

class Prop extends Component {
    render() {
        const { prop } = this.props;

        return (
            <Link className="text-white">
                <p className="bg-warning">{prop.price} €</p>
                <p>{prop.district}</p>
                <div className="d-flex justify-content-between" style="background-color: #073855;">
                    <p>{prop.createdAt}</p>
                    <p>{prop.category}</p>
                    <p>{prop.surface}</p>
                    <p>{prop.bedroom}</p>
                </div>
            </Link>
        );
    }
}

export default Prop;
