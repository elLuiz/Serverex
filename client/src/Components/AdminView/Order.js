import React from 'react'
import PropTypes from 'prop-types'

function Order({productId, productName, productPrice, productImg, userId}) {
    return (
        <div className='order-card'>
            <div className="order-product-img">
                <img src={productImg} alt={productName} />
            </div>
            <div className="order-description">
                <p className="product">Product: {productName} </p>
                <p className="price">Price: $49.99 </p>
                <p className="buyer">Buyer: {userId}</p>
            </div>

            <div className="order-deliver">
                <button type="button" className="deliver"><i className="fas fa-truck-moving"></i> Deliver</button>
            </div>
        </div>
    )
}

Order.propTypes = {
    productId: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired
}

export default Order

