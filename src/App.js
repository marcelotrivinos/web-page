import axios from "axios";
import React, { useState, useEffect } from 'react';

import { Store } from "./pages/Store";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8080/data');
      const data = res.data
      setCategories(data.categories);
      setProducts(data.products);
    };

    fetchData();
  }, []);

  return(
    <div>
      <Store categories={ categories } products={ products }></Store>
    </div>
  )
}

export default App;
