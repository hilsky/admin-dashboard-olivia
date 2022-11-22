import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailhotel.module.css'


const detailHotel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Hotel</h1>
            </div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Hotel</Form.Label>
                    <Form.Control type="text" value="Amnaya Resto Kuta" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" value="Kuta, Bali" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Fasilitas WIFI</Form.Label>
                    <Form.Control type="text" value="Free" className={styles.bodyInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fasilitas Parkir</Form.Label>
                    <Form.Control type="text" value="Luas" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fasilitas Sarapan</Form.Label>
                    <Form.Control type="text" value="Pagi dan Malem" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" value="4" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ubah
                </Button>
            </Form>
        </div>
    )
}

export default detailHotel;