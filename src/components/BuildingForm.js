import React from 'react';
import FilterCategory from "../containers/CategoryFilterContainer";
import FilterDistrict from "../containers/DistrictFilterContainer";

function BuildingForm(props) {

    const { categorySelected, districtSelected } = props;

    props.building.category = categorySelected;
    props.building.district = districtSelected;

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(props);
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <fieldset>
                <legend>Ajouter un bien</legend>

                <label for="price">Prix :</label>
                <input type="text" name="price" value={props.building.price} onChange={event => props.handleChange('price', event.target.value)} placeholder="Titre du produit"/>
                <br></br>
                <label for="surface">Surface :</label>
                <input type="number" name="surface" value={props.building.surface} onChange={event => props.handleChange('surface', parseFloat(event.target.value))}/>
                <br></br>
                <label for="bedroom">Nombre de chambre(s) :</label>
                <input type="number" name="bedroom" value={props.building.bedroom} onChange={event => props.handleChange('bedroom', event.target.value)}/>
                <br></br>
                <label for="description">Description :</label>
                <input type="text" name="description" value={props.building.description} onChange={event => props.handleChange('description', event.target.value)}/>
                <br></br>
                <label for="picture">Image(s) :</label>
                <input type="file" name="picture" value={props.building.picture} onChange={event => props.handleChange('picture', event.target.value)}/>
                <br></br>
                <FilterCategory />
                <br/>
                <FilterDistrict />
                <br/>
                <button>Ajouter</button>
            </fieldset>
        </form>
    );
}

export default BuildingForm;
