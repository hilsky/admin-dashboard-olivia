import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/tambahwisata.module.css'
import { useDispatch } from 'react-redux';
import { createWisata } from '../actions/wisata';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const TambahWisata = () => {


    const [namaWisata, setNamaWisata] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [desc, setDesc] = useState('');
    const [rating, setRating] = useState('');
    const [imgBg, setImgBg] = useState('');
    const [successful, setSuccessful] = useState(false)
    const [validated, setValidated] = useState(false)

    const navigate = useNavigate();
    const mySwal = withReactContent(Swal)

    const onChangeNamaWisata = (e) => {
        e.preventDefault();
        const namaWisata = e.target.value;
        setNamaWisata(namaWisata);
    }

    const onChangeAlamat = (e) => {
        e.preventDefault();
        const alamat = e.target.value;
        setLokasi(alamat);
    }

    const onChangeDeskripsi = (e) => {
        e.preventDefault();
        const deskripsi = e.target.value;
        setDesc(deskripsi);
    }

    const onChangeRating = (e) => {
        e.preventDefault();
        const rating = e.target.value;
        setRating(rating);
    }

    const onChangeImg = (e) => {
        e.preventDefault();
        const img = e.target.value;
        setImgBg(img);
    }

    const dispatch = useDispatch();



    const tambahData = (e) => {
        e.preventDefault();
        setSuccessful(false);
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (namaWisata.length === 0 && lokasi.length === 0 && desc.length === 0) {
            setSuccessful(false);
        }
        else {
            dispatch(createWisata(namaWisata, lokasi, desc, rating, imgBg))
                .then(() => {
                    mySwal.fire({
                        title: 'Berhasil',
                        icon: 'success',
                        text: 'Berhasil ditambahkan',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate('/wisata')
                    })
                })
                .catch((err) => {
                    mySwal.fire({
                        icon: 'error',
                        title: 'Oops',
                        text: 'Sepertinya ada yang salah, silahkan coba lagi',
                    })
                })
        }

        setValidated(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Tambah Wisata</h1>
            </div>

            <Form onSubmit={tambahData}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Wisata</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nama wisata' onChange={onChangeNamaWisata} className={styles.bodyInput} value={namaWisata} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan alamat' className={styles.bodyInput} onChange={onChangeAlamat} value={lokasi} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your Alamat with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan deskripsi' className={styles.bodyInput} onChange={onChangeDeskripsi} value={desc} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan rating' className={styles.bodyInput} onChange={onChangeRating} value={rating} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>URL Gambar</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan URL Gambar' className={styles.bodyInput} onChange={onChangeImg} value={imgBg} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default TambahWisata;