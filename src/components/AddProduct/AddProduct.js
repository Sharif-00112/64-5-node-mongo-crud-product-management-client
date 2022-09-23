import React, { useRef } from 'react';
 
const AddProduct = () => {
    const titleRef = useRef();
    const uomRef = useRef();
    const colorRef = useRef();
    const priceRef = useRef();
    const stockRef = useRef();


    const handleAddUser = e =>{
        e.preventDefault();

        const prodTitle = titleRef.current.value;
        const uom = uomRef.current.value;
        const color = colorRef.current.value;
        const price = priceRef.current.value;
        const stock = stockRef.current.value;

        const newProduct = {prodTitle, uom, color, price, stock};

        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })  
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Added Successfully!')
                // e.target.reset();
            }
        })      
    }

    return (
        <div>
            <h2>Add a Product</h2>

            <form onSubmit={handleAddUser}>
                <input type="text" placeholder='Product Title:' ref={titleRef} required/> 
                <br />
                <input type="text" placeholder='Color:' ref={colorRef}/> 
                <br />
                <input type="text" placeholder='UOM:' ref={uomRef}/> 
                <br />
                <input type="text" placeholder='Price:' ref={priceRef}/> 
                <br />
                <input type="text" placeholder='Stock:' ref={stockRef}/> 
                <br /> <br />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;