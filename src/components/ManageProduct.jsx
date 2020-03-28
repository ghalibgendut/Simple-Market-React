import React, { Component } from 'react';
import axios from 'axios';


class ManageProduct extends Component {

    state = {
        products: []
    }


    componentDidMount() {
        axios.get(
            'http://localhost:2020/products'
        ).then((res) => {
            this.setState({ products: res.data })

        })
    }


    tambahProduk = () => {
         let _nama_produk = this.nama_produk.value;
         let _deskripsi_produk = this.deskrpsi_produk.value;
         let _harga_produk = this.harga_produk.value;
         let _gambar_produk = "https://cdn.shoplightspeed.com/shops/609450/files/8224665/image.jpg";

         let linkPost = 'http://localhost:2020/products';
         let data = {
                        nama_produk: _nama_produk, 
                        deskrpsi_produk: _deskripsi_produk,
                        harga_produk: _harga_produk,
                        src: _gambar_produk
                    }
        // cek data terisi atau tidak
        // console.log(data);

        // Lakukan post untuk mengirim data
        axios.post(linkPost,data).then((res)=> {
            // cek dengan POST apakah data terkirim atau tidak 
            console.log(res);
            
        })
        
        




    }

    renderTabelProduk = () => {
        return this.state.products.map((produk) => {
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
                        <img className="img-thumbnail" src={produk.src} alt="Gundam" height="100" width="100" />
                    </td>
                    <td>
                        <button className="btn btn-outline-primary mx-2 my-5">Edit</button>
                        <button className="btn btn-outline-danger">Cancel</button>
                    </td>
                </tr>
            )

        })
        // return res;

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
                        {this.renderTabelProduk()}
                    </tbody>
                </table>

                {/* Input Product */}
                <div className="container-fluid border-top input-group">
                    <h2 className="text-left display-4 mx-2 my-2">Tambah Produk</h2>

                    <table className="table table-bordered">
                        <tr>
                            <td><input ref={(input) => { this.nama_produk = input }} className="form-control" type="text" placeholder="Nama Barang" id="name" /></td>
                            <td><input ref={(input) => { this.deskrpsi_produk = input }} className="form-control" type="text" placeholder="Deskripsi barang" id="deskripsi" /></td>
                            <td><input ref={(input) => { this.harga_produk = input }} className="form-control" type="number" placeholder="Harga Barang" id="harga" /></td>
                            <td><button className="btn btn-outline-success btn-block" onClick={(this.tambahProduk)}> Tambah </button></td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }


}

export default ManageProduct