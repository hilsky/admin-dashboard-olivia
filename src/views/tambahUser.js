import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailuser.module.css'


const TambahUser = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Tambah Users</h1>
            </div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder='Masukan nama lengkap' className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Masukan Email' className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Masukan password' className={styles.bodyInput} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default TambahUser;