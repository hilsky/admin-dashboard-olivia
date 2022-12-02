import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/wisata.module.css';
import HiOutlinePencilSquare from 'react-icons/hi2'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWisataList, deleteWisata } from "../actions/wisataAction";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Wisata = () => {

    const dispatch = useDispatch();
    const mySwal = withReactContent(Swal);

    const { getWisataListResult, getWisataLoading, getWisataError } =
        useSelector((state) => state.wisataReducer);

    useEffect(() => {
        dispatch(getWisataList());
    }, [])

    let navigate = useNavigate();
    const tambahWisata = () => {
        let path = '/tambah-wisata'
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
                    dispatch(deleteWisata(id))
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
                <h1 className={styles.headerText}>Wisata</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport} onClick={tambahWisata}>
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
                                    <Button variant="success" size="sm"><Link to={"/detail-wisata/" + e._id} className={styles.linkTo}>Edit</Link></Button>
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

export default Wisata;