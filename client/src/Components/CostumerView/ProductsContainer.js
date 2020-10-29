import React, { Component } from 'react'
import '../../assets/styles/Components/CostumerView/productscontainer.css'
import Axios from 'axios'
import Product from './Product'
import io from 'socket.io-client';
import Notification from '../Notification/Notification';

const socket = io("http://localhost:5000")

export class ProductsContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            products: [],
            notification: {
                message: ''
            }
        }
    }

    async componentDidMount(){
        const result = await Axios.get('https://my-json-server.typicode.com/elLuiz/Products/db')
        socket.on("deliver-product", alert=> {
            this.setState({notification: {message: alert}})
        })
        this.setState({products: result.data.products})
    }

    componentWillUnmount(){
        socket.off('order-product')
        socket.off('deliver-product')
    }

    orderProduct = (productId)=>{
        const {products} = this.state
        const product = products.filter((product) => product.productId === productId)
        socket.emit('order-product', product[0]);
    }

    clearMessage = ()=>{
        this.setState({notification: {message: ''}})
    }
    
    render() {
        const {message} = this.state.notification
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

                <Notification 
                    icon="fas fa-truck-loading" 
                    message={message} 
                    clearMessage={this.clearMessage}
                /> 
            </div>
        )
    }
}

export default ProductsContainer
