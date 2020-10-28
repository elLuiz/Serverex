import React, { Component } from 'react'
import '../assets/styles/Pages/index.css';
import Nav from '../Components/Nav/Nav';
import ProductsContainer from '../Components/CostumerView/ProductsContainer';

export class Index extends Component {
    render() {
        return (
            <div className="serverex-app">
                <Nav />
                <ProductsContainer />
            </div>
        )
    }
}

export default Index
