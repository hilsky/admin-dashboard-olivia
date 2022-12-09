import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/user.module.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUser,
    getUserById,

} from "../actions/user"

import { getUserList, deleteUser } from "../actions/userAction";

const DashboardUser = () => {

    const dispatch = useDispatch();
    const mySwal = withReactContent(Swal);


    const { getUserListResult, getUserLoading, getUserError, userDeleteResult } =
        useSelector((state) => state.userReducer);

    useEffect(() => {

        dispatch(getUserList());


    }, [dispatch])


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
                    dispatch(deleteUser(id))
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
    let navigate = useNavigate();
    const tambahUser = () => {
        let path = '/tambah-user'
        navigate(path)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Users</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport} onClick={tambahUser}>
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
                        <th>Nama Lengkap</th>
                        <th>Username</th>
                        <th>Email</th>

                        <th>Nomor Whatsapp</th>
                        <th>Alamat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody className={styles.tBody}>
                    {getUserListResult ? (getUserListResult.map((e, index) => {
                        return (
                            <tr key={e._id}>
                                <td>{index + 1}</td>
                                <td>{e.fullName}</td>
                                <td>{e.username ? (e.username) : "-"}</td>
                                <td>{e.email}</td>
                                <td>{e.noWa ? (e.noWa) : "-"}</td>
                                <td>{e.alamat ? (e.alamat) : "-"}</td>
                                <td className={styles.tdBtn}>
                                    <Button variant="success" size="sm"><Link to={"/detail-user/" + e._id} className={styles.linkTo}>Edit</Link></Button>
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

export default DashboardUser;