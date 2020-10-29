import React, { Component } from 'react'
import io from 'socket.io-client';
import '../../assets/styles/Components/AdminView/ordercontainer.css';
import Order from './Order';
const socket = io("http://localhost:5000");

export class OrdersContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            orders: []
        }
    }

    componentDidMount(){
        socket.on('order-product', product => {
            this.setState({orders: [...this.state.orders, product]})
        })
    }

    deliverProduct = (id)=>{
        socket.emit("deliver-product", "Your order has been delivered.")
        this.setState({orders: [...this.state.orders.filter(order => order.productId !== id)]})
    }
    render() {
        const {orders} = this.state;
        
        if(orders.length===0){
            return <h1>Waiting for an order</h1>
        }
        
        return (
            <div className="orders-container">
                <h1 className="description">New Orders </h1>
                <div className="orders">
                    {
                        orders.map((order)=> (
                            <Order key={order.productId}
                                productImg={order.productImg}
                                productName={order.productName}
                                productId={order.productId}
                                productPrice={order.productPrice}
                                userId={order.userId}
                                deliverProduct={this.deliverProduct}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default OrdersContainer
