import React, { useState } from 'react'

import { CategoryProduct } from "../components/CategoryProduct";
import { Search } from "../components/Search";

export function Store({ categories, products }) {

    const [text, setText] = useState("");

    let productsList = categories.map(category =>
        <CategoryProduct key={ category } title={ category }
            dataProducts={
                products.filter(product =>
                    product.category === category) }
            quantity={ 5 }>   
        </CategoryProduct> );

    let productsSearch = <CategoryProduct title={ "Searching: " + text }
                            dataProducts={ products.filter(product =>
                            product.name === text) }>
                        </CategoryProduct>


    return (
        <div>
            <h1 className="text-primary text-center">E-Commerce</h1>
            <Search value={ text } callback={ setText }></Search>
            { text === "" ? productsList : productsSearch }
        </div>
    )
}
