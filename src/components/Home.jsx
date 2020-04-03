import React, { Component } from 'react'
import axios from '../config/axios';
import ProdukItem from './ProdukItem';

class Home extends Component {
    state = {
        produk : []
        // hargaMin: [],
        // hargaMax: []
    }

    componentDidMount() {
        this.ambilDataProduk();
    }

    ambilDataProduk = () => {
        axios.get ('/products').then((res)=>{
            this.setState({produk : res.data})
        })
    }


    renderProduk = () => {
        return this.state.produk.map((produk)=>{
            produk.harga_produk = produk.harga_produk.toLocaleString('in');

            return ( 
                <ProdukItem produk={produk} />
            )
        })
    }

    onBtnSearch = () => {
        axios.get('/products').then((res)=>{
            
            // Cari berdasarkan nama

            let keyword = this.nama_barang.value
            let harga_min = parseInt(this.min.value)
            let harga_max = parseInt(this.max.value)
            let filterResult = []

            // cari berdasarkan nama
            if (isNaN(harga_min) && isNaN(harga_max)) {
                filterResult = res.data.filter((data)=>{
                    return (
                        data.nama_produk.toLowerCase().includes(keyword.toLocaleLowerCase())
                    )
                })
            }
            // Cari berdasarkan harga minimal
            else if (isNaN(harga_max)) {
                filterResult = res.data.filter((data)=>{
                    return (
                        data.nama_produk.toLowerCase().includes(keyword.toLocaleLowerCase()) &&
                        data.harga_produk >= harga_min
                    )
                })
            }
            // Cari berdasarkan harga maksimal
            else if (isNaN(harga_min)) {
                filterResult = res.data.filter((data)=>{
                    return (
                        data.nama_produk.toLowerCase().includes(keyword.toLocaleLowerCase()) &&
                        data.harga_produk <= harga_max
                    )
                })
            }
            else {
                filterResult = res.data.filter((data)=>{
                    return (
                        data.nama_produk.toLowerCase().includes(keyword.toLocaleLowerCase()) &&
                        data.harga_produk <= harga_max &&
                        data.harga_produk >= harga_min
                    )
                })
            }

            this.setState({ produk: filterResult})
        })
    }

    // onResetButton = () => {
    //     this.ambilDataProduk();
    // }








    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* Search Box */}
                    <div className="col-10 col-lg-3 col-xl-2">
                        <div className="mt-3">
                            <div className="card">
                                <div className="card-title border-bottom border-secondary">
                                    <h1 className="text-center">Search</h1>
                                </div>
                                <div className="card-body">
                                    <h4>Nama Produk</h4>
                                    <input ref={ (input) => { this.nama_barang = input } } type="text" className="form-control" />
                                    <h4>Harga Produk</h4>
                                    <input ref={ (input) => { this.min = input } } type="text" placeholder="Minimal" className="form-control my-2" />
                                    <input ref={ (input) => { this.max = input } } type="text" placeholder="Maksimal" className="form-control" />

                                    <button onClick={this.onBtnSearch} className="btn btn-block btn-outline-primary my-2">Search</button>
                                    <button onClick={this.ambilDataProduk} className="btn btn-block btn-outline-danger">Reset</button>
                                </div>  
                            </div>
                        </div>
                    </div>

                    {/* List Products */}
                    <div className="row col-10 col-lg-9">
                        {this.renderProduk()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
