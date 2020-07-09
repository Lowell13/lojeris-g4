import React from 'react';

function BuildingForm(props) {

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit();
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <fieldset>
                <legend>Ajouter un produit</legend>
                <input type="text" value={props.building.price} onChange={event => props.handleChange('price', event.target.value)} placeholder="Titre du produit"/>
                <input type="number" value={props.building.surface} onChange={event => props.handleChange('surface', parseFloat(event.target.value))}/>
                <input type="number" value={props.building.bedroom} onChange={event => props.handleChange('bedroom', event.target.value)}/>
                <input type="text" value={props.building.description} onChange={event => props.handleChange('description', event.target.value)}/>
                <input type="text" value={props.building.picture} onChange={event => props.handleChange('picture', event.target.value)}/>
                <input type="text" value={props.building.category} onChange={event => props.handleChange('category', event.target.value)}/>
                // Add features input
                <input type="text" value={props.building.disctrict} onChange={event => props.handleChange('disctrict', event.target.value)}/>
                <button>Ajouter</button>
            </fieldset>
        </form>
    );
}

export default BuildingForm;
