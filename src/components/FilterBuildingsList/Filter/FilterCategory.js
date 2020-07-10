import React from 'react';

function Filter(props) {
    const { categories } = props;

    const categoriesJsx = categories.map(c => (
        <option key={c.id} value={c.name}>{c.name}</option>
    ));

    return (
        <select defaultValue="none" name="type">
            <option value="none">Type du bien</option>
            {categoriesJsx}
        </select>

    );
}

export default Filter;