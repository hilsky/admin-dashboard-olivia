import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/user.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getKulinerList, deleteKuliner } from "../actions/kulinerAction";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Kuliner = () => {

    const dispatch = useDispatch();
    const mySwal = withReactContent(Swal);

    const { getKulinerListResult, getKulinerLoading, getKulinerError } =
        useSelector((state) => state.kulinerReducer);

    useEffect(() => {
        dispatch(getKulinerList());
    }, [dispatch])

    let navigate = useNavigate();
    const tambahKuliner = () => {
        let path = '/tambah-kuliner'
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
                    dispatch(deleteKuliner(id))
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
                <h1 className={styles.headerText}>Kuliner</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport} onClick={tambahKuliner}>
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
                                    <Button variant="success" size="sm"><Link to={"/detail-kuliner/" + e._id} className={styles.linkTo}>Edit</Link></Button>
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

export default Kuliner;