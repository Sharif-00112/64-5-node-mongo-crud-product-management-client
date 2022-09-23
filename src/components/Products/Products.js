import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    
    return (
        <div>
            <h2>Available Products: {products.length}</h2> 
            <br />

            <ul>
                {
                    products.map(product => <li key={product._id}>
                        {product.prodTitle} - {product.color} - {product.price} TK - {product.stock} {product.uom} in Stock

                    </li>)
                }
            </ul>
        </div>
    );
};

export default Products;