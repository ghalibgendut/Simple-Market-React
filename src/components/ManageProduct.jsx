import React, { Component } from 'react';
import axios from 'axios';


class ManageProduct extends Component {

    state = {
        products: []
    }


    componentDidMount(){
        axios.get(
            'http://localhost:2020/products'
        ).then((res)=>{
            this.setState({products: res.data})
        })
    }




    renderList = () => {
        return this.state.products.map(
            
        )

    }   



    render() {
        return (
            <div className="container">
                {/* List Products */}
                <h1 className="text-center display-3 my-2">Manage Product</h1>
                <table class="table table-hover text-center mb-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nama Produk</th>
                            <th scope="col">Deskripsi Produk</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Gambar</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.renderList()}
                        </tr>
                    </tbody>
                </table>

                {/* Input Product */}
            </div>
        )
    }


}

export default ManageProduct