import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/tambahkuliner.module.css'


const tambahKuliner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Tambah Kuliner</h1>
            </div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Kuliner</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nama kuliner' className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="email" placeholder='Masukkan alamat' className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicJam">
                    <Form.Label>Jam buka - tutup</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan jam buka - tutup' className={styles.bodyInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicHari">
                    <Form.Label>Hari buka buka - tutup</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan hari buka - tutup' className={styles.bodyInput} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default tambahKuliner;