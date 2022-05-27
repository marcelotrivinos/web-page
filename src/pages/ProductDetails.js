import React from 'react';

import { Details } from "../components/Details";

export function ProductDetails(props) {
    return(
        <div>
            <Details product={ props.product }></Details>
        </div>
    )
}