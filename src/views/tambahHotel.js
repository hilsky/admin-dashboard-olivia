import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import styles from '../styles/tambahhotel.module.css'
import { useDispatch } from 'react-redux';
import { createHotel } from '../actions/hotel';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const TambahHotel = () => {

    const [namaHotel, setNamaHotel] = useState('');
    const [alamat, setAlamat] = useState('');
    const [fasWifi, setFasWifi] = useState('1');
    const [fasParkir, setFasParkir] = useState('1');
    const [fasSarapan, setFasSarapan] = useState('1');
    const [rating, setRating] = useState('');
    const [imgHotel, setImgHotel] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null)
    const [successful, setSuccessful] = useState(false);
    const [handleResponse, setHandleResponse] = useState(null);
    const [invalidImage, setInvalidImage] = useState(null);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mySwal = withReactContent(Swal);

    const onChangeNamaHotel = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setNamaHotel(val)
    }

    const onChangeAlamat = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setAlamat(val)
    }

    const onChangeFasWifi = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setFasWifi(val)
    }

    const onChangeFasParkir = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setFasParkir(val)
    }

    const onChangeFasSarapan = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setFasSarapan(val)
    }

    const onChangeRating = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setRating(val)
    }

    const onChangeImgBg = (e) => {

        e.preventDefault();
        const val = e.target.value;
        setImgHotel(val)

    }

    const TambahData = (e) => {
        e.preventDefault();
        setSuccessful(false);
        const form = e.currentTarget;
        const formData = new FormData();
        formData.append('image', imgHotel)

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (namaHotel.length === 0) {
            return (
                <div>Wajib Diisi</div>
            )
        }
        else {
            dispatch(createHotel(namaHotel, alamat, fasWifi, fasParkir, fasSarapan, rating, imgHotel))
                .then(() => {
                    mySwal.fire({
                        title: 'Berhasil',
                        icon: 'success',
                        text: 'Berhasil ditambahkan',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate('/hotel')
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
                <h1 className={styles.headerText}>Tambah Hotel</h1>
            </div>

            <Form onSubmit={TambahData}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Hotel</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nama hotel' className={styles.bodyInput} value={namaHotel} onChange={onChangeNamaHotel} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan alamat hotel' className={styles.bodyInput} value={alamat} onChange={onChangeAlamat} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Fasilitas Wifi</Form.Label>
                    <Form.Select onChange={onChangeFasWifi} value={fasWifi} className={styles.bodyInput}>
                        <option value="1">Tersedia</option>
                        <option value="0">Tidak Tersedia</option>
                    </Form.Select>
                    {/* <Form.Control type="text" placeholder='Masukkan Rating' className={styles.bodyInput} onChange={onChangeFasWifi} value={fasWifi} /> */}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Fasilitas Parkir</Form.Label>
                    <Form.Select onChange={onChangeFasParkir} value={fasParkir} className={styles.bodyInput} >
                        <option value="1">Tersedia</option>
                        <option value="0">Tidak Tersedia</option>
                    </Form.Select>
                    {/* <Form.Control type="text" placeholder='Masukkan Rating' className={styles.bodyInput} onChange={onChangeFasParkir} value={fasParkir} /> */}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Fasilitas Sarapan</Form.Label>
                    <Form.Select onChange={onChangeFasSarapan} value={fasSarapan} className={styles.bodyInput}>
                        <option value="1">Tersedia</option>
                        <option value="0">Tidak Tersedia</option>
                    </Form.Select>
                    {/* <Form.Control type="text" placeholder='Masukkan Rating' className={styles.bodyInput} onChange={onChangeFasSarapan} value={fasSarapan} /> */}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan Rating' className={styles.bodyInput} onChange={onChangeRating} value={rating} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>URL Gambar</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan URL Gambar' className={styles.bodyInput} value={imgHotel} onChange={onChangeImgBg} />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default TambahHotel;
