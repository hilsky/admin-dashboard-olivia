import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/user.module.css';
import HiOutlinePencilSquare from 'react-icons/hi2'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelList, deleteHotel } from "../actions/hotelAction";

const Hotel = () => {

    const dispatch = useDispatch();

    const { getHotelListResult, getHotelLoading, getHotelError } =
        useSelector((state) => state.hotelReducer);

    useEffect(() => {
        dispatch(getHotelList());
    }, [dispatch])

    let navigate = useNavigate();
    const tambahHotel = () => {
        let path = '/tambah-hotel'
        navigate(path)
    }

    const deleteById = (id) => {
        dispatch(deleteHotel(id))
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        navigate('/wisata')
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Hotel</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport} onClick={tambahHotel}>
                    Tambah
                </Button>
                <Button variant="primary" size="sm" active className={styles.btnExport}>
                    Export as PDF
                </Button>
                <Button variant="primary" size="sm" active className={styles.btnExport}>
                    Export as Excel
                </Button>
            </div>
            <Table striped bordered hover>
                <thead className={styles.tableBody}>
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
                                <td>Tersedia</td>
                                <td>{e.fasParkir !== "0" ? "Tersedia" : "Tidak Tersedia"} </td>
                                <td>{e.fasSarapan !== "0" ? "Tersedia" : "Tidak Tersedia"}</td>
                                <td>4</td>
                                <td className={styles.tdBtn}>
                                    <Button variant="success" size="sm"><Link to={"/detail-hotel/" + e._id}>Edit</Link></Button>
                                    <Button variant="danger" size="sm" onClick={deleteHotel(e._id)}>Hapus</Button>
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