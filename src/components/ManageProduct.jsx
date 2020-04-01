import React, { Component } from 'react';
import axios from 'axios';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Import Component Modal Edit
import ModalEdit from './ModalEdit';


class ManageProduct extends Component {

    state = {
        products: [],
        editProducts: {},
        modalEdit : false
    }


    componentDidMount() {
        this.ambilData();
        // axios.get(
        //     'http://localhost:2020/products'
        // ).then((res) => {
        //     this.setState({ products: res.data })

        // })
    }

    ambilData = () => {
        axios.get(
            'http://localhost:2020/products'
        ).then((res) => {
            this.setState({ products: res.data , modalEdit: false})

        })
    }


    tambahProduk = () => {
        let _nama_produk = this.nama_produk.value;
        let _deskripsi_produk = this.deskrpsi_produk.value;
        let _harga_produk = parseInt(this.harga_produk.value);
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
        axios.post(linkPost, data).then((res) => {
            // cek dengan POST apakah data terkirim atau tidak 
            // console.log(res);
            alert("Penambahan data berhasil");

            this.ambilData();
            // axios.get(
            //     'http://localhost:2020/products'
            // ).then((res) => {
            //     this.setState({ products: res.data })
            // })

        })

    }

    hapusProduk = (id) => {
        console.log(`ID Barang ke - ${id}`);
        axios.delete(`http://localhost:2020/products/${id}`).then((res) => { this.ambilData() });

    }

    editProdukToggle = (id) => {
        // Cek id ter ambil atau tidak
        // console.log(`ID barang ke - ${id}`);
        axios.get(`http://localhost:2020/products/${id}`).then((res) => {
            // console.log(res.data);
            this.setState({modalEdit:true, editProducts: res.data});
        });

    }

    // Untuk apabila user mengklik sembarang modal akan menghilang
    // modalHilang = () => {
    //     this.setState({editModal: false});
    // }


    // Simpan Data
    // simpanEditProduk = () => {
    //     let _editNamaProduk = this.editNamaProduk.value ? this.editNamaProduk.value : this.state.editProducts.nama_produk;
    //     let _editDeskripsiProduk = this.editDeskripsiProduk.value ? this.editDeskripsiProduk.value : this.state.editProducts.deskrpsi_produk;
    //     let _editHargaProduk = parseInt(this.editHargaProduk.value) ? parseInt(this.editHargaProduk.value) : this.state.editProducts.harga_produk;
    //     let _editGambarProduk = "https://previews.123rf.com/images/amnachphoto/amnachphoto1710/amnachphoto171000028/87374433-bangkok-thailand-october-11-2017-gundam-model-scale-1-100-produced-by-bandai-japan-gundam-plastic-mo.jpg";

    //     // let _editGambarProduk = "https://previews.123rf.com/images/amnachphoto/amnachphoto1710/amnachphoto171000028/87374433-bangkok-thailand-october-11-2017-gundam-model-scale-1-100-produced-by-bandai-japan-gundam-plastic-mo.jpg";
        

    //     let linkEdit = `http://localhost:2020/products/${this.state.editProducts.id}`;
    //     let data = {
    //         nama_produk: _editNamaProduk,
    //         deskrpsi_produk: _editDeskripsiProduk,
    //         harga_produk: _editHargaProduk,
    //         src: _editGambarProduk
    //     }
    //     // Edit Data
    //     axios.patch(linkEdit, data).then((res)=>{
    //         this.ambilData()
    //     });
    // }


    // Cancel
    batalEditToggle = () => {
        this.setState({modalEdit : false})
    }




    renderTabelProduk = () => {
        return this.state.products.map((produk) => {
            produk.harga_produk = produk.harga_produk.toLocaleString('id');
            return (
                <tr>
                    <td>{produk.id}</td>
                    <td>{produk.nama_produk}</td>
                    <td>{produk.deskrpsi_produk}</td>
                    <td>RP. {produk.harga_produk}</td>
                    <td>
                        <img className="img-thumbnail list" src={produk.src} alt="Gundam" />
                    </td>
                    <td>
                        <button onClick={() => { this.editProdukToggle(produk.id) }} className="btn btn-outline-primary mx-2 my-5">Edit</button>
                        {/* Cara mengambil data apabila ada function yang ada parameter, apabila dimasukan,
                         ke onClick maka harus dimasukan ke function anonymous */}
                        <button onClick={() => { this.hapusProduk(produk.id) }} className="btn btn-outline-danger">Delete</button>
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
                            <td><input ref={(input) => { this.harga_produk = input }} className="form-control" type="text" placeholder="Harga Barang" id="harga" /></td>
                            <td><button className="btn btn-outline-success btn-block" onClick={(this.tambahProduk)}> Tambah </button></td>
                        </tr>
                    </table>

                </div>

                {/* Modal Edit */}
                {/* toggle = {this.modalHilang} apabila ingin mengklik sembarang modal hilang */}
                {/* Modal edit apabila di 1 componnent yang sama */}
                {/* <Modal isOpen={this.state.modalEdit}>
                    <ModalHeader>Edit Produk</ModalHeader>
                    <ModalBody>
                        Nama Produk : <input className="form-control" type="text" ref={(input) => {this.editNamaProduk = input}} placeholder={this.state.editProducts.nama_produk} />
                        Deskripsi Produk : <input className="form-control" type="text" ref={(input) => {this.editDeskripsiProduk = input}}  placeholder={this.state.editProducts.deskrpsi_produk}/>
                        Harga Produk : <input className="form-control" type="text" ref={(input) => {this.editHargaProduk = input}}  placeholder={this.state.editProducts.harga_produk}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="success" onClick = {(this.simpanEditProduk)}>Simpan</Button>
                        <Button outline color="danger" onClick = {(this.batalEditToggle)}>Cancel</Button>
                    </ModalFooter>
                </Modal> */}

                {/* Modal edit dengan component berbeda */}
                <ModalEdit 
                    batalEditToggle={this.batalEditToggle} 
                    modalEdit={this.state.modalEdit} 
                    editProducts={this.state.editProducts} 
                    ambilData={this.ambilData} 
                />
            </div>
        )
    }


}

export default ManageProduct