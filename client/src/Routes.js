import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Pages/Index';
import Admin from './Pages/Admin';
export default function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Index} />
            <Route path="/admin" component={Admin} />
        </Router>
    )
}
