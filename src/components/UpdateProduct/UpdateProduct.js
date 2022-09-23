import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 
const UpdateProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        const url = `http://localhost:3001/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    } ,[id]);

    const handleTitleChange = e =>{
        // updating Title using option-1
        const updatedTitle = e.target.value;
        const UpdatedProduct = {
            prodTitle: updatedTitle, 
            uom: product.uom, 
            color: product.color, 
            price: product.price, 
            stock: product.stock
        };
        setProduct(UpdatedProduct);
    }

    const handleUomChange = e =>{
        // updating Uom using option-1
        const updatedUom = e.target.value;
        const UpdatedProduct = {
            prodTitle: product.prodTitle, 
            uom: updatedUom, 
            color: product.color, 
            price: product.price, 
            stock: product.stock
        };
        setProduct(UpdatedProduct);
    }

    const handleColorChange = e =>{
        // updating Color using option-2
        const updatedColor = e.target.value;
        const UpdatedProduct = {...product}
        UpdatedProduct.color = updatedColor;
        setProduct(UpdatedProduct);
    }

    const handlePriceChange = e =>{
        // updating price using option-2
        const updatedPrice = e.target.value;
        const UpdatedProduct = {...product}
        UpdatedProduct.price = updatedPrice;
        setProduct(UpdatedProduct);
    }

    const handleStockChange = e =>{
        // updating stock using option-2
        const updatedStock = e.target.value;
        const UpdatedProduct = {...product}
        UpdatedProduct.stock = updatedStock;
        setProduct(UpdatedProduct);
    }

    const handleUpdateProduct = e =>{
        e.preventDefault();
        const url = `http://localhost:3001/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully!')
                setProduct({});
            }
        })
    }
    
    return (
        <div>
            <h2>Updating Product: {product.prodTitle} - ID: {id}</h2>

            <form onSubmit={handleUpdateProduct}>
                Product Title: <input type="text" value={product.prodTitle || ''} onChange={handleTitleChange}/>
                <br />
                Color: <input type="text" value={product.color || ''} onChange={handleColorChange}/>
                <br />
                UOM: <input type="text" value={product.uom || ''} onChange={handleUomChange}/>
                <br />
                Price: <input type="text" value={product.price || ''} onChange={handlePriceChange}/>
                <br />
                Stock: <input type="text" value={product.stock || ''} onChange={handleStockChange}/>
                <br /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;