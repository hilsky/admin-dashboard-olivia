import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailuser.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import WisataDataService from '../services/wisata.service';
import { useDispatch, useSelector } from 'react-redux';
import { updateWisata } from '../actions/wisataAction';


const DetailWisata = () => {

    const initialWisataState = {
        id: null,
        namaWisata: "",
        lokasi: "",
        desc: "",
        rating: "",
    }

    const [namaWisata, setNamaWisata] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [desc, setDesc] = useState('');
    const [rating, setRating] = useState('');

    const [currentWisata, setCurrentWisata] = useState(initialWisataState)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getWisataDetailById = id => {
        WisataDataService.getById(id)
            .then(response => {
                setNamaWisata(response.data.namaWisata)
                setLokasi(response.data.lokasi)
                setDesc(response.data.desc)
                setRating(response.data.rating)
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        getWisataDetailById(id)
    }, [id])

    const onChangeNamaWisata = (e) => {
        e.preventDefault();
        const val = e.target.value
        setNamaWisata(val);

    };

    const onChangeLokasi = (e) => {
        e.preventDefault();
        const val = e.target.value
        setLokasi(val);

    };

    const onChangeDesc = (e) => {
        e.preventDefault();
        const val = e.target.value
        setDesc(val);

    };

    const onChangeRating = (e) => {
        e.preventDefault();
        const val = e.target.value
        setRating(val);

    };

    const updateData = () => {
        dispatch(updateWisata({ namaWisata, lokasi, desc, rating }, id))
        console.log(currentWisata)
        navigate('/wisata')
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Wisata</h1>
            </div>
            {currentWisata ?
                (<Form onSubmit={updateData}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nama Wisata</Form.Label>
                        <Form.Control type="text" value={namaWisata} className={styles.bodyInput} onChange={onChangeNamaWisata} />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" value={lokasi} className={styles.bodyInput} onChange={onChangeLokasi} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDeskripsi">
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control type="text" value={desc} className={styles.bodyInput} onChange={onChangeDesc} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" value={rating} className={styles.bodyInput} onChange={onChangeRating} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ubah
                    </Button>
                </Form>)
                : <div>Tidak ada data</div>
            }
        </div >
    )
}

export default DetailWisata;