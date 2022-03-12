import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { CategoryTitle } from "../components/CategoryTitle";
import { Product } from "../components/Product";

export function FullCategory() {
    
    const params = useParams();
    const category = params.category.substring(1);

    const data = useSelector((state) => state.data);
    const products = data.products;
    const dataProducts = products.filter((product) => product.category === category)

    return (
        <div className="card bg-primary text-center">
            <div>
                <CategoryTitle title={ category }></CategoryTitle>
                <Product dataProducts={ dataProducts }
                    quantity={ 0 }>
                </Product>
            </div>
        </div>
    )
}