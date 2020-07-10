import React from 'react';

function Filter(props) {
    const { districts } = props;

    const districtsJsx = districts.map(d => (
        <option key={d.id} value={d.name}>{d.name}</option>
    ));

    return (
        <select name="district">
            <option selected value="none">Quartier du bien</option>
            {districtsJsx}
        </select>
    );
}

export default Filter;