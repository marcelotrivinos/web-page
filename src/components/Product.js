import React from 'react';

export function Product(props) {

    const dataProducts = props.quantity ? props.dataProducts.slice(0, props.quantity) : props.dataProducts

    return (
        <div className="d-flex justify-content-start">
            { dataProducts.map(product =>
                <div key={ product.id } className="card" style={{ width:"18rem" }}>
                    <img className="card-img-top rounded" src={ product.image_url } alt={ product.name }></img>
                    <div className="card-body">
                        <h3 className="card-title">{ product.name }</h3>
                    </div>
                </div>
            )}
        </div> 
    );
}
