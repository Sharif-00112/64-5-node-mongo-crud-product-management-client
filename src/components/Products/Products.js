import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3099/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    //DELETE a product 
    const handleDeleteProduct = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:3099/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully!')

                    // update the UI (or, set [products] dependency instead of it)
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
        }
    }
    
    return (
        <div>
            <h2>Available Products: {products.length}</h2> 

            <ul>
                {
                    products.map(product => <li key={product._id}>
                        {product.prodTitle} - {product.color} - {product.price} TK - {product.stock} {product.uom} in Stock

                        <button onClick={() =>handleDeleteProduct(product._id)}>
                            Delete
                        </button>

                        <Link to={`products/update/${product._id}`}>
                            <button>
                                Update
                            </button>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Products;