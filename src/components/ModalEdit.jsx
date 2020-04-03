import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from '../config/axios';
import Swal from 'sweetalert2';

export default class ModalEdit extends Component {

    simpanEditProduk = () => {
        let _editNamaProduk = this.editNamaProduk.value ? this.editNamaProduk.value : this.props.editProducts.nama_produk;
        let _editDeskripsiProduk = this.editDeskripsiProduk.value ? this.editDeskripsiProduk.value : this.props.editProducts.deskrpsi_produk;
        let _editHargaProduk = parseInt(this.editHargaProduk.value ? this.editHargaProduk.value : this.props.editProducts.harga_produk);
        let _editGambarProduk = "https://previews.123rf.com/images/amnachphoto/amnachphoto1710/amnachphoto171000028/87374433-bangkok-thailand-october-11-2017-gundam-model-scale-1-100-produced-by-bandai-japan-gundam-plastic-mo.jpg";

        

        let linkEdit = `/products/${this.props.editProducts.id}`;
        let data = {
            nama_produk: _editNamaProduk,
            deskrpsi_produk: _editDeskripsiProduk,
            harga_produk: _editHargaProduk,
            src: _editGambarProduk
        }
        // Edit Data
        axios.patch(linkEdit, data).then((res)=>{
            Swal.fire(
                'Berhasil !',
                'Data Produk Berhasil di Ubah.',
                'success'
            )
            this.props.ambilData()
        });
    }



    render() {
        return (
            <div>
                <Modal isOpen={this.props.modalEdit}>
                    <ModalHeader>Edit Produk</ModalHeader>
                    <ModalBody>
                        Nama Produk      : <input className="form-control" type="text" ref={(input) => {this.editNamaProduk = input}} placeholder={this.props.editProducts.nama_produk} />
                        Deskripsi Produk : <input className="form-control" type="text" ref={(input) => {this.editDeskripsiProduk = input}}  placeholder={this.props.editProducts.deskrpsi_produk}/>
                        Harga Produk     : <input className="form-control" type="text" ref={(input) => {this.editHargaProduk = input}}  placeholder={this.props.editProducts.harga_produk}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="success" onClick = {this.simpanEditProduk}>Simpan</Button>
                        <Button outline color="danger" onClick = {this.props.batalEditToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
