import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/pemandu.module.css';
import HiOutlinePencilSquare from 'react-icons/hi2'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPemanduList, deletePemandu } from "../actions/pemanduAction";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Pemandu = () => {

    const dispatch = useDispatch();
    const mySwal = withReactContent(Swal)

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
                    dispatch(deletePemandu(id))
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
                <h1 className={styles.headerText}>Pemandu</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport} onClick={tambahPemandu}>
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
                        <th>Nama Pemandu</th>
                        <th>Username</th>
                        <th>Email</th>
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
                                <td>{e.desc ? (e.desc) : "-"}</td>
                                <td>{e.rating ? (e.rating) : "-"}</td>

                                <td className={styles.tdBtn}>
                                    <Button variant="success" size="sm"><Link to={"/detail-pemandu/" + e._id} className={styles.linkTo}>Edit</Link></Button>
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

export default Pemandu;