import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailuser.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import WisataDataService from '../services/wisata.service';
import { useDispatch, useSelector } from 'react-redux';


const DetailWisata = () => {

    const initialWisataState = {
        id: null,
        namaWisata: "",
        lokasi: "",
        desc: "",
        rating: "",
    }

    const [currentWisata, setCurrentWisata] = useState(initialWisataState)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getWisataDetailById = id => {
        WisataDataService.getById(id)
            .then(response => {
                setCurrentWisata(response.data)
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        getWisataDetailById(id)
    }, [id])

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Wisata</h1>
            </div>
            {currentWisata ?
                (<Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nama Wisata</Form.Label>
                        <Form.Control type="text" value={currentWisata.namaWisata} className={styles.bodyInput} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" value={currentWisata.lokasi} className={styles.bodyInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDeskripsi">
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control type="text" value={currentWisata.desc} className={styles.bodyInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDeskripsi">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" value={currentWisata.rating} className={styles.bodyInput} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ubah
                    </Button>
                </Form>)
                : <div>Tidak ada data</div>
            }
        </div>
    )
}

export default DetailWisata;