import React from 'react';

function Filter(props) {

    const { categories } = props;

    const categoriesJsx = categories.map(c => (
        <option key={c.id} value={c.name}>{c.name}</option>
    ));

    return (

        <select name="type">
            <option value="">Type du bien</option>
            {categoriesJsx}
        </select>

    );

}

export default Filter;