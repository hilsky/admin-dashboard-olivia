import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/tambahkuliner.module.css'
import { useDispatch } from 'react-redux';
import { createKuliner } from '../actions/kuliner';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const TambahKuliner = () => {

    const [namaKuliner, setNamaKuliner] = useState('');
    const [alamat, setAlamat] = useState('');
    const [jamBuka, setJamBuka] = useState('');
    const [jamTutup, setJamTutup] = useState('');
    const [hariBuka, setHariBuka] = useState('');
    const [hariTutup, setHariTutup] = useState('');
    const [imgBg, setImgBg] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mySwal = withReactContent(Swal)

    const onChangeNamaKuliner = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setNamaKuliner(val)
    }

    const onChangeAlamat = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setAlamat(val)
    }

    const onChangeJamBuka = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setJamBuka(val)
    }

    const onChangeJamTutup = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setJamTutup(val)
    }

    const onChangeHariBuka = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setHariBuka(val)
    }

    const onChangeHariTutup = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setHariTutup(val)
    }

    const onChangeImgBg = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setImgBg(val)
    }

    const TambahData = (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (namaKuliner.length === 0) {
            return null
        }
        else {
            dispatch(createKuliner(namaKuliner, alamat, jamBuka, jamTutup, hariBuka, hariTutup, imgBg))
                .then(() => {
                    mySwal.fire({
                        title: 'Berhasil',
                        icon: 'success',
                        text: 'Berhasil ditambahkan',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {

                        navigate('/kuliner')
                    })
                })
                .catch((err) => {
                    mySwal.fire({
                        icon: 'error',
                        title: 'Oops',
                        text: 'Sepertinya ada yang salah, silahkan coba lagi',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Tambah Kuliner</h1>
            </div>

            <Form onSubmit={TambahData}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Kuliner</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nama kuliner' className={styles.bodyInput} value={namaKuliner} onChange={onChangeNamaKuliner} />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan alamat' className={styles.bodyInput} value={alamat} onChange={onChangeAlamat} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Jam buka - tutup</Form.Label>
                    <div className={styles.formBody}>
                        <Form.Control type="text" className={styles.bodyInput} value={jamBuka} onChange={onChangeJamBuka} />
                        <div className={styles.spaceInput}>-</div>
                        <Form.Control type="text" className={styles.bodyInput} value={jamTutup} onChange={onChangeJamTutup} />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Hari buka buka - tutup</Form.Label>
                    <div className={styles.formBody}>
                        <Form.Control type="text" className={styles.bodyInput} value={hariBuka} onChange={onChangeHariBuka} />
                        <div className={styles.spaceInput}>-</div>
                        <Form.Control type="text" className={styles.bodyInput} value={hariTutup} onChange={onChangeHariTutup} />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>URL Gambar</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan alamat' className={styles.bodyInput} value={imgBg} onChange={onChangeImgBg} />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default TambahKuliner;