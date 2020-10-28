import React from 'react'
import propTypes from 'prop-types';

const Product =({orderProduct, productId, productName, productPrice, productImg})=>{
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={productImg} alt={productName} />
            </div>

            <div className="product-description">
                <p className="name">{productName}</p>
                <p className="price">{`$ ${productPrice}`}</p>
            </div>

            <div className="product-button">
                <button onClick={()=>orderProduct(productId)} className="buy-product">Buy</button>
            </div>
        </div>
    )
}


Product.propTypes = {
    productId: propTypes.number.isRequired,
    productName: propTypes.string.isRequired,
    productPrice: propTypes.number.isRequired,
    productImg: propTypes.string.isRequired,
    orderProduct: propTypes.func.isRequired
}

export default Product