import React, { Component } from 'react'
import '../../assets/styles/Components/CostumerView/productscontainer.css'
import Axios from 'axios'
import Product from './Product'
import io from 'socket.io-client';

const socket = io("http://localhost:5000")

export class ProductsContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            products: []
        }
    }

    async componentDidMount(){
        const result = await Axios.get('https://my-json-server.typicode.com/elLuiz/Products/db')
        this.setState({products: result.data.products})
    }

    orderProduct = (productId)=>{
        const {products} = this.state
        const product = products.filter((product) => product.productId === productId)
        socket.emit('order-product', product[0]);
    }
    render() {
        return (
            <div className="products-container">
                <h1 className="description">Products</h1>
                <div className="products">
                    { 
                        this.state.products.map((product)=> (
                            <Product
                                key={product.productId}
                                productId={product.productId}
                                productImg={product.productImg}
                                productName={product.productName}
                                productPrice={product.productPrice}
                                orderProduct={this.orderProduct}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default ProductsContainer
