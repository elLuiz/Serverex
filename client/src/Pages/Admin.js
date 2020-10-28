import React, { Component } from 'react'
import Nav from '../Components/Nav/Nav'
import OrdersContainer from '../Components/AdminView/OrdersContainer'

export class Admin extends Component {
    render() {
        return (
            <div className="serverex-app">
                <Nav />
                <OrdersContainer />
            </div>
        )
    }
}

export default Admin
