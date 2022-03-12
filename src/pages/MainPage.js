import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { dataServer } from "../actions";

import { CategoryProduct } from "../components/CategoryProduct";
import { Search } from "../components/Search";

export function MainPage() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dataServer());
    }, []);

    const data = useSelector((state) => state.data);
    const categories = data.categories;
    const products = data.products;
    
    const [text, setText] = useState("");

    const isCategory = (text) => {
        const match = categories.filter((category) =>
            category === text)
        return match.lenght === 1;
    }

    let productsList =
        categories.map(category =>
            <CategoryProduct
                key={ category }
                title={ category }
                dataProducts={
                    products.filter(product =>
                        product.category === category) }
                quantity={ 5 }
                category={ category.toString() }>   
            </CategoryProduct> );

    let productsSearch = <CategoryProduct
                            title={ "Searching: " + text }
                            dataProducts={ products.filter(product =>
                                product.name === text)}
                            category={ isCategory(text) ? text : "" } >
                        </CategoryProduct>

    return (
        <div>
            <h1 className="text-primary text-center">E-Commerce</h1>
            <Search value={ text } callback={ setText }></Search>
            { text === "" ? productsList : productsSearch }
        </div>
    );
}
