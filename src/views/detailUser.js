import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailuser.module.css'


const detailUser = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Users</h1>
            </div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" value="Awidyo Rofito" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value="awidyorofito@gmail.com" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value="12345678" className={styles.bodyInput} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ubah
                </Button>
            </Form>
        </div>
    )
}

export default detailUser;