import React, { Component } from 'react';
import axios from 'axios';
import {onLoginUser} from '../actions/index_actions';
import { connect } from 'react-redux';

// Akan me-redirect ke alamat tertentu
import {Redirect} from 'react-router-dom';

class Login extends Component {

    onButtonLogin = () => {
        let _username = this.username.value;
        let _pass = this.password.value;


        // Get data dengan parameter

        let linkGet = 'http://localhost:2020/users';
        let data = {username: _username, pass: _pass}

        axios.get(linkGet, {params: data}).then((res)=> {
            if (res.data.length > 0) {
                // res.data[0] = {id: 1, username: 'Dummy01' pass:'dummy01'}
                // user ditemukan : simpan info user ke redux
                console.log(res.data);
                this.props.onLoginUser(res.data[0])


                
            }
            else{
                // user tidak ditemukan : memuncuklan notif
                alert(`username atau password salah`)
                
            }
        })


    }





    render() {
        if (!this.props.uname) { // Juka Belum login 
            return (
                <div>
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-5 mx-auto mt-5 card">
                            <div className="card-body">
                                <div className="border-bottom border-secondary card-title text-center">
                                    <h1>Login</h1>
                                </div>
    
                                <form className="form-group">
                                    <div className="card-title">
                                        <h4>Username</h4>
                                    </div>
                                    <input ref={(input) => {this.username = input }} type="text" className="form-control" />
    
                                    <div className="card-title">
                                        <h4>Password</h4>
                                    </div>
                                    <input ref={(input) => {this.password = input }} type="password" className="form-control" />
                                </form>
    
                                <button className="btn btn-primary btn-block" onClick={(this.onButtonLogin)} >Login</button>
                                {/* GET */}
                                {/* <button className="btn btn-success btn-block" onClick={(this.onGetClick)} >Get Data</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
        }
        else {
            return <Redirect to="/"/>
        }
    }
}

let mapStateToProps = (state) => {
    return {
        uname: state.auth.username
    }
}


export default connect(mapStateToProps, {onLoginUser})(Login)



// return (
//     <div>
//         <div className="container-fluid">
//         <div className="row">
//             <div className="col-5 mx-auto mt-5 card">
//                 <div className="card-body">
//                     <div className="border-bottom border-secondary card-title text-center">
//                         <h1>Login</h1>
//                     </div>

//                     <form className="form-group">
//                         <div className="card-title">
//                             <h4>Username</h4>
//                         </div>
//                         <input ref={(input) => {this.username = input }} type="text" className="form-control" />

//                         <div className="card-title">
//                             <h4>Password</h4>
//                         </div>
//                         <input ref={(input) => {this.password = input }} type="password" className="form-control" />
//                     </form>

//                     <button className="btn btn-primary btn-block" onClick={(this.onButtonLogin)} >Login</button>
//                     {/* GET */}
//                     {/* <button className="btn btn-success btn-block" onClick={(this.onGetClick)} >Get Data</button> */}
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
// )
