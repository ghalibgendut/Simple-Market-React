import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Home extends Component {
    state = {
        produk : []
    }

    componentDidMount() {
        this.ambilDataProduk();
    }

    ambilDataProduk = () => {
        axios.get ('http://localhost:2020/products').then((res)=>{
            this.setState({produk : res.data})
        })
    }

    renderProduk = () => {
        return this.state.produk.map((produk)=>{
            produk.harga_produk = produk.harga_produk.toLocaleString('in');

            return ( 
                <div className="card col-lg-5 col-xl-3 mx-auto mx-xl-4 my-3">
                    <img className="card-img-top my-2" src={produk.src} alt="Gundam"/>
                    <div className="card-body">
                        <div style={{height: 50}}>   
                            <h5 className="card-title">{produk.nama_produk} </h5>
                        </div>
                        <p className="card-text">{produk.deskrpsi_produk} </p>
                        <p className="card-text">Rp. {produk.harga_produk} </p>
                        <input  className="form-control" type="text" placeholder="Jumlah QTY" />
                        <Link to={`/DetailProduk/${produk.id}`}>
                            <button className="btn btn-block btn-outline-primary my-2" >Detail</button>
                        </Link>
                        <button className="btn btn-block btn-outline-success" >Add to Chart</button>
                    </div>
                </div>
            )
        })
    }








    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* Search Box */}
                    <div className="col-10 col-lg-3 col-xl-2">
                        <h1 className="text-center display-3">Search Box</h1>
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
