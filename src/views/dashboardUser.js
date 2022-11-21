import React from 'react'
import { Table, Button } from 'react-bootstrap';
import styles from '../styles/user.module.css';
import HiOutlinePencilSquare from 'react-icons/hi2'
import { useNavigate, Link } from 'react-router-dom';


const dashboardUser = () => {

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
                        <th>Nama Lengkap</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody className={styles.tBody}>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td className={styles.tdBtn}>
                            <Button variant="success" size="sm"><Link to="/detail-user">Edit</Link></Button>
                            <Button variant="danger" size="sm">Hapus</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td className={styles.tdBtn}>
                            <Button variant="success" size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Hapus</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
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

export default dashboardUser;