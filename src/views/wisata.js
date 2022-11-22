import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/user.module.css';
import HiOutlinePencilSquare from 'react-icons/hi2'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWisataList, deleteWisata } from "../actions/wisataAction";

const Wisata = () => {

    const dispatch = useDispatch();

    const { getWisataListResult, getWisataLoading, getWisataError } =
        useSelector((state) => state.wisataReducer);

    useEffect(() => {
        dispatch(getWisataList());
    }, [dispatch])

    let navigate = useNavigate();
    const tambahWisata = () => {
        let path = '/tambah-wisata'
        navigate(path)
    }

    const deleteById = (id) => {
        dispatch(deleteWisata(id))
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
                <h1 className={styles.headerText}>Wisata</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport} onClick={tambahWisata}>
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
                        <th>Nama Wisata</th>
                        <th>Alamat</th>
                        <th>Deskripsi</th>
                        <th>Rating</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody className={styles.tBody}>
                    {getWisataListResult ? (getWisataListResult.map((e, index) => {
                        return (
                            <tr key={e._id}>
                                <td>{index + 1}</td>
                                <td>{e.namaWisata}</td>
                                <td>{e.lokasi ? (e.lokasi) : "-"}</td>
                                <td>{e.desc ? (e.desc) : "-"}</td>
                                <td>{e.rating ? (e.rating) : "-"}</td>

                                <td className={styles.tdBtn}>
                                    <Button variant="success" size="sm"><Link to={"/detail-wisata/" + e._id}>Edit</Link></Button>
                                    <Button variant="danger" size="sm">Hapus</Button>
                                </td>
                            </tr>
                        )
                    })) : <div>Data Tidak Tersedia</div>}
                </tbody>
            </Table>
        </div>
    )
}

export default Wisata;