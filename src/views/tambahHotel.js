import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/tambahhotel.module.css'


const tambahHotel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Tambah Hotel</h1>
            </div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Hotel</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nama hotel' className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan alamat hotel' className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Fasilitas Wifi</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan fasilitas wifi' className={styles.bodyInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Fasilitas Parkir</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan fasilitas Parkir' className={styles.bodyInput} />
    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Fasilitas Sarapan</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan fasilitas sarapan' className={styles.bodyInput} />
                
                </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Rating</Form.Label>
                      <Form.Control type="text" placeholder='Masukkan Rating' className={styles.bodyInput} />
                  </Form.Group>
                <Button variant="primary" type="submit">
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default tambahHotel;
