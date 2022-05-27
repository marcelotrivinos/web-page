import React from 'react';

export function Details(props) {
    return (
        <div className="card bg-primary text-center">
            <div className="card" style={{ width:"18rem" }}>
                <h2>{ props.name }</h2>
                <img className="card-img-top rounded" src={ props.image_url } alt={ props.name }></img>
                <h3>{ props.price }</h3>
                <h4>{ props.description }</h4>
            </div>
        </div>
    )
}
