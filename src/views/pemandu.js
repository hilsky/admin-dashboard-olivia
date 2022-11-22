import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/user.module.css';
import HiOutlinePencilSquare from 'react-icons/hi2'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPemanduList, deletePemandu } from "../actions/pemanduAction";


const Pemandu = () => {

    const dispatch = useDispatch();

    const { getPemanduListResult, getPemanduLoading, getPemanduError } =
        useSelector((state) => state.pemanduReducer);

    useEffect(() => {
        dispatch(getPemanduList());
    }, [dispatch])

    let navigate = useNavigate();
    const tambahPemandu = () => {
        let path = '/tambah-pemandu'
        navigate(path)
    }

    const deleteById = (id) => {
        dispatch(deletePemandu(id))
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        navigate('/pemandu')
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Pemandu</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport} onClick={tambahPemandu}>
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
                        <th>Nama Pemandu</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Deskripsi</th>
                        <th>Rating</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody className={styles.tBody}>
                    {getPemanduListResult ? (getPemanduListResult.map((e, index) => {
                        return (
                            <tr key={e._id}>
                                <td>{index + 1}</td>
                                <td>{e.nama ? (e.nama) : "-"}</td>
                                <td>{e.username ? (e.username) : "-"}</td>
                                <td>{e.email ? (e.email) : "-"}</td>
                                <td>{e.password ? (e.password) : "-"}</td>
                                <td>{e.desc ? (e.desc) : "-"}</td>
                                <td>{e.rating ? (e.rating) : "-"}</td>

                                <td className={styles.tdBtn}>
                                    <Button variant="success" size="sm"><Link to={"/detail-pemandu/" + e._id}>Edit</Link></Button>
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

export default Pemandu;