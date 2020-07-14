import React from 'react';

function Filter(props) {
    const { categories } = props;

    const categoriesJsx = categories.map(c => (
        <option key={c.id} value={c.name}>{c.name}</option>
    ));

    return (
        <select onChange={event => props.handleChange('category', event.target.value)} defaultValue="none">
            <option value="none">Catégorie du bien</option>
            {categoriesJsx}
        </select>
    );
}

export default Filter;