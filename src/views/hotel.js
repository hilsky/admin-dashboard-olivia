import React, { useEffect } from 'react'
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/hotel.module.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelList, deleteHotel } from "../actions/hotelAction";

const Hotel = () => {

    const dispatch = useDispatch();
    const mySwal = withReactContent(Swal);
    const { getHotelListResult, getHotelLoading, getHotelError } =
        useSelector((state) => state.hotelReducer);

    useEffect(() => {
        dispatch(getHotelList());
    }, [])

    let navigate = useNavigate();
    const tambahHotel = () => {
        let path = '/tambah-hotel'
        navigate(path)
    }

    const deleteById = (id, e) => {
        e.preventDefault();
        console.log(e)
        mySwal.fire({
            title: "Konfirmasi?",
            text: "Anda yakin akan menghapusnya",
            icon: "warning",
            dangerMode: true,
            confirmButtonColor: '#3085d6',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hapus!',
            cancelButtonText: 'Batal'

        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteHotel(id))
                    mySwal.fire({
                        position: 'center',
                        title: "Yeay",
                        text: "Berhasil menghapus",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                    }).then(() => {
                        window.location.reload()
                    })

                }
            })

    }


    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Hotel</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport} onClick={tambahHotel}>
                    +
                </Button>
                {/* <Button variant="primary" size="sm" active className={styles.btnExport}>
                    Export as PDF
                </Button>
                <Button variant="primary" size="sm" active className={styles.btnExport}>
                    Export as Excel
                </Button> */}
            </div>
            <Table responsive className={styles.bodyTable}>
                <thead className={styles.theadBody}>
                    <tr>
                        <th>No</th>
                        <th>Nama Hotel</th>
                        <th>Alamat</th>
                        <th>Fasilitas Wifi</th>
                        <th>Fasilitas Parkir</th>
                        <th>Fasilitas Sarapan</th>
                        <th>Rating </th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody className={styles.tBody}>
                    {getHotelListResult ? (getHotelListResult.map((e, index) => {
                        return (
                            <tr key={e._id}>
                                <td>{index + 1}</td>
                                <td>{e.namaHotel ? (e.namaHotel) : "-"}</td>
                                <td>{e.alamat ? (e.alamat) : "-"}</td>
                                <td>{e.fasWifi !== "0" ? "Tersedia" : "Tidak Tersedia"}</td>
                                <td>{e.fasParkir !== "0" ? "Tersedia" : "Tidak Tersedia"} </td>
                                <td>{e.fasSarapan !== "0" ? "Tersedia" : "Tidak Tersedia"}</td>
                                <td>4</td>
                                <td className={styles.tdBtn}>
                                    <Button variant="success" size="sm"><Link to={"/detail-hotel/" + e._id} className={styles.linkTo}>Edit</Link></Button>
                                    <Button variant="danger" size="sm" onClick={(x) => deleteById(e._id, x)} className={styles.linkTo}>Hapus</Button>
                                </td>
                            </tr>
                        )
                    })) : <div>Data Tidak Tersedia</div>}
                </tbody>
            </Table>
        </div>
    )
}

export default Hotel;