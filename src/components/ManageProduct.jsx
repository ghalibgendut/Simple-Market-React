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
        return this.state.products.map((produk)=>{
            // console.log(produk.id);
            return (
                <tr>
                     <td>
                        {produk.id}
                    </td>
                    <td>
                        {produk.nama_produk}
                    </td>
                    <td>
                        {produk.deskrpsi_produk}
                    </td>
                    <td>
                        {produk.harga_produk}
                    </td>
                    <td>
                        <img className="img-thumbnail" src={produk.src} alt="Gundam" height="100" width="100"/>
                    </td>
                    <td>
                        <button className="btn btn-outline-primary my-2 mx-2">Edit</button>
                        <button className="btn btn-outline-danger">Cancel</button>
                    </td>
                </tr>
            )
    
        })

    }   



    render() {
        return (
            <div className="container">
                {/* List Products */}
                <h1 className="text-center display-3 my-2">Manage Product</h1>
                <table className="table table-hover text-center mb-5">
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
                            {this.renderList()}

                    </tbody>
                </table>

                {/* Input Product */}
            </div>
        )
    }


}

export default ManageProduct