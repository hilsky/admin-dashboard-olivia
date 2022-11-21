import React from 'react'
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/user.module.css';
import HiOutlinePencilSquare from 'react-icons/hi2'
import { useNavigate, Link } from 'react-router-dom';


const Hotel = () => {

    // const navigate = useNavigate();
    // const navigateToDetailUser = () => {
    //     let path = '/detail-user'

    // }
    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Hotel</h1>
            </div>
            <div className={styles.headerBody2}>
                <Button variant="primary" size="sm" active className={styles.btnExport}>
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
                        <th>#</th>
                        <th>Nama Hotel</th>
                        <th>Alamat</th>
                        <th>Kota/Kab</th>
                        <th>Provinsi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody className={styles.tBody}>
                    <tr>
                        <td>1</td>
                        <td>Apa Hotel</td>
                        <td>Alamat Apa</td>
                        <td>Sukabumi</td>
                        <td>Jawa Barat</td>
                        <td className={styles.tdBtn}>
                            <Button variant="success" size="sm"><Link to="/detail-user">Edit</Link></Button>
                            <Button variant="danger" size="sm">Hapus</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Apa Hotel</td>
                        <td>Alamat Apa</td>
                        <td>Sukabumi</td>
                        <td>Jawa Barat</td>
                        <td className={styles.tdBtn}>
                            <Button variant="success" size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Hapus</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Apa Hotel</td>
                        <td>Alamat Apa</td>
                        <td>Sukabumi</td>
                        <td>Jawa Barat</td>
                        <td className={styles.tdBtn}>
                            <Button variant="success" size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Hapus</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Hotel;