import React from 'react';

const ProductDetails = ({params}) => {
    const id = params.id;
    return (
        <div>
            <h1>Product Details</h1>
            <h2>Product Details for Product ID: {id}</h2>
        </div>
    );
};

export default ProductDetails;