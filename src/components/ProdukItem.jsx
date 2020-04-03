import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';

export default class ProdukItem extends Component {

    beliKeCart = () => {
        let qty = this.qty.value
        Swal.fire(
            'Berhasil !',
            `Anda sebanyak : ${qty} Buah`,
            'success'
        )
    }


    render() {
        return (
            
            <div key={this.props.produk.id} className="card col-lg-5 col-xl-3 mx-auto mx-xl-4 my-3">
                <img className="card-img-top my-2" src={this.props.produk.src} alt="Gundam"/>
                <div className="card-body">
                    <div style={{height: 50}}>   
                        <h5 className="card-title">{this.props.produk.nama_produk} </h5>
                    </div>
                    <p className="card-text">{this.props.produk.deskrpsi_produk} </p>
                    <p className="card-text">Rp. {this.props.produk.harga_produk} </p>
                    <input ref={(input) => {this.qty = input}} className="form-control" type="text" placeholder="Jumlah QTY" />
                    <Link to={`/DetailProduk/${this.props.produk.id}`}>
                        <button className="btn btn-block btn-outline-primary my-2" >Detail</button>
                    </Link>
                    <button onClick={this.beliKeCart} className="btn btn-block btn-outline-success" >Add to Chart</button>
                </div>
            </div>
            
        )
    }
}
