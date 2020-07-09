import React from 'react';

function Filter(props) {
    
        const { categories, districts } = props;
        console.log(categories);

        const categoriesJsx = categories.map(c => (
            <option key={c.id} value={c.name}></option>
        ));
        const districtsJsx = districts.map(d => (
            <option key={d.id} value={d.name}></option>
        ));

        return (
            <form>
                <fieldset>
                    <legend>Filtres :</legend>
                    <select name="type">
                        <option value="">Type du bien</option>
                        {categoriesJsx}
                    </select>
                    <select name="district">
                        <option value="">Quartier du bien</option>
                        {districtsJsx}
                    </select>
                </fieldset>
            </form>
        );

}

export default Filter;