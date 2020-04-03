import React, { Component } from 'react'
import axios from '../config/axios';




export default class DetailProduk extends Component {

    state = {
        produk: {}
    }

    componentDidMount() {
        axios.get(`/products/${this.props.match.params.idProduk}`)
            .then((res) => {
                this.setState({produk : res.data})
            })
    }

            
            // <div className="card col-5 mx-auto my-3">
            //     <img className="card-img-top my-2" src={this.state.produk.src} alt="Gundam" />
            //     <div className="card-body">
            //         <div style={{ height: 50 }}>
            //             <h5 className="card-title">{this.state.produk.nama_produk} </h5>
            //         </div>
            //         <p className="card-text">{this.state.produk.deskrpsi_produk} </p>
            //         <p className="card-text">Rp. {this.state.produk.harga_produk} </p>
            //         <input className="form-control my-3" type="text" placeholder="Jumlah QTY" />
            //         <button className="btn btn-block btn-outline-success" >Add to Chart</button>
            //     </div>
            // </div>

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="card col-5 mx-auto my-3">
                        <img className="card-img-top my-2" src={this.state.produk.src} alt="Gundam" />
                        <div className="card-body">
                            <div style={{ height: 50 }}>
                                <h5 className="card-title">{this.state.produk.nama_produk} </h5>
                            </div>
                            <p className="card-text">{this.state.produk.deskrpsi_produk} </p>
                            <p className="card-text">Rp. {this.state.produk.harga_produk} </p>
                            <input className="form-control my-3" type="text" placeholder="Jumlah QTY" />
                            <button className="btn btn-block btn-outline-success" >Add to Chart</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
