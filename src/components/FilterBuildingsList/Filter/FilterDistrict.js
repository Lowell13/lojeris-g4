import React from 'react';

function Filter(props) {
    const { districts } = props;

    const districtsJsx = districts.map(d => (
        <option key={d.id} value={d}>{d.name}</option>
    ));

    return (
        <select onChange={event => props.handleChange('district', event.target.value)} defaultValue="none">
            <option value="none">Quartier du bien</option>
            {districtsJsx}
        </select>
    );
}

export default Filter;