import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom';


// Components
import Header from './Header';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import ManageProduct from './ManageProduct';
import { Form } from 'reactstrap';
import DetailProduk from './DetailProduk';

// Keep Login
import {onLoginUser} from '../actions/index_actions'
import {connect} from 'react-redux'


class App extends Component {

    state = {
        cekStatus : false
    }
    
    componentDidMount(){
        // Dapat ditulis seperti ini
        let resUser = localStorage.getItem('userData')
        let user = JSON.parse(resUser)

        // atau
        // let resUserData = JSON.parse(localStorage.getItem('userData'))

        if (user) {
            this.props.onLoginUser(user)
        }
        this.setState({check: true})
    }


    render() {
        if (this.state.cekStatus) {
            return (
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/ManageProduk" component={ManageProduct} />
                        <Route path="/DetailProduk/:idProduk" component={DetailProduk} />
                    </div>
                </BrowserRouter>   
            )
        }
        
        return <h1> Loading </h1>
    }

}

export default connect(null, {onLoginUser})(App)