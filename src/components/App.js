import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom';


// Components
import Header from './Header';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import ManageProduct from './ManageProduct';
import { Form } from 'reactstrap';



class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/ManageProduk" component={ManageProduct} />
                </div>
            </BrowserRouter>   
        )
    }

}

export default App