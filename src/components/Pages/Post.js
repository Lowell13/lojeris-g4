import React, {Component} from 'react';
import BuildingFormContainer from '../../containers/BuildingFormContainer';

class Home extends Component {
    render() {
        return (
            <section>
                <div>En-tête</div>
                <BuildingFormContainer />
            </section>
        );
    }
}

export default Home;
