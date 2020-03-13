import React, { Component } from 'react';
import axios from 'axios';


class Register extends Component {


    onButtonClick = () => {
        // Ambil value
        let username = this.username.value;
        let email = this.email.value;
        let pass = this.password.value;


        // Simpan di json
        // GET, POST, PUT, PATCH
        let linkPost = 'http://localhost:2020/users';
        let linkGet = 'http://localhost:2020/users';
        let data = {username, email, pass}

        // Cek Data dengan cara GET
        axios.get(linkGet).then((res)=>{
            // Cek Duplikat data
            // res.data = [{}, {}, {}]
            let sudahAdaUsername = res.data.filter((user) => {
                return user.username == username;
            })

            // console.log(sudahAdaUsername);
            if (sudahAdaUsername.length > 0) {
               return alert(`Username ${username} Sudah Terpakai`);
            }


            let sudahAdaEmail = res.data.filter((user) => {
                return user.email == email;
            })
            // console.log(sudahAdaEmail);
            if (sudahAdaEmail.length > 0) {
                return alert(`Email ${email} Sudah Terpakai`);
             }
            
            
        })

        // POST
        axios.post(linkPost, data).then((res) => {
            alert ('Registrasi Berhasil');
        })
        
        
    }

    // GET
    // onGetClick = () => {
    //     let link = 'http://localhost:2020/users';

    //     axios.get(link).then((res) => {
    //         console.log(res);
    //     })
    // }



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 mx-auto mt-5 card">
                        <div className="card-body">
                            <div className="border-bottom border-secondary card-title text-center">
                                <h1>Register</h1>
                            </div>

                            <form className="form-group">
                                <div className="card-title">
                                    <h4>Username</h4>
                                </div>
                                <input ref={(input) => {this.username = input }} type="text" className="form-control" />

                                <div className="card-title" >
                                    <h4>Email</h4>
                                </div>
                                <input ref={(input) => {this.email = input }} type="email" className="form-control" />

                                <div className="card-title">
                                    <h4>Password</h4>
                                </div>
                                <input ref={(input) => {this.password = input }} type="password" className="form-control" />
                            </form>

                            <button className="btn btn-success btn-block" onClick={(this.onButtonClick)} >Register</button>
                            {/* GET */}
                            {/* <button className="btn btn-success btn-block" onClick={(this.onGetClick)} >Get Data</button> */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register
