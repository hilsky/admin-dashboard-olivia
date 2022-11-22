import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/user.module.css';
import HiOutlinePencilSquare from 'react-icons/hi2'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getKulinerList, deleteKuliner } from "../actions/kulinerAction";

const Kuliner = () => {

    const dispatch = useDispatch();

    const { getKulinerListResult, getKulinerLoading, getKulinerError } =
        useSelector((state) => state.kulinerReducer);

    useEffect(() => {
        dispatch(getKulinerList());
    }, [dispatch])

    let navigate = useNavigate();
    const tambahWisata = () => {
        let path = '/tambah-kuliner'
        navigate(path)
    }

    const deleteKulinerById = (id) => {
        dispatch(deleteKuliner(id))
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
                <h1 className={styles.headerText}>Kuliner</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport}><Link to="/tambah-kuliner">
                    Tambah</Link>
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
                        <th>Nama Kuliner</th>
                        <th>Alamat</th>
                        <th>Jam buka - tutup</th>
                        <th>Hari buka - tutup</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody className={styles.tBody}>
                    {getKulinerListResult ? (getKulinerListResult.map((e, index) => {
                        return (
                            <tr key={e._id}>
                                <td>{index + 1}</td>
                                <td>{e.namaKuliner ? (e.namaKuliner) : "-"}</td>
                                <td>{e.alamat ? (e.alamat) : "-"}</td>
                                <td>{e.jamBuka ? (e.jamBuka) : null} - {e.jamTutup ? (e.jamTutup) : null}</td>
                                <td>{e.hariBuka ? (e.hariBuka) : null} - {e.hariTutup ? (e.hariTutup) : null}</td>

                                <td className={styles.tdBtn}>
                                    <Button variant="success" size="sm"><Link to={"/detail-kuliner/" + e._id}>Edit</Link></Button>
                                    <Button variant="danger" size="sm" >Hapus</Button>
                                </td>
                            </tr>
                        )
                    })) : <div>Data Tidak Tersedia</div>}
                </tbody>
            </Table>
        </div>
    )
}

export default Kuliner;