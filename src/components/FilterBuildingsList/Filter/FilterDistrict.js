import React from 'react';

function Filter(props) {
    const { districts } = props;

    const districtsJsx = districts.map(d => (
        <option key={d.id} value={d.name}>{d.name}</option>
    ));

    return (
        <select defaultValue="none" name="district">
            <option value="none">Quartier du bien</option>
            {districtsJsx}
        </select>
    );
}

export default Filter;