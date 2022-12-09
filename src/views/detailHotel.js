import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailhotel.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { putHotelUpdate } from '../actions/hotelAction';
import { useDispatch, useSelector } from "react-redux";
import HotelDataService from '../services/hotel.service';

const DetailHotel = () => {

    const [namaHotel, setNamaHotel] = useState('');
    const [alamat, setAlamat] = useState('');
    const [fasWifi, setFasWifi] = useState('');
    const [fasParkir, setFasParkir] = useState('');
    const [fasSarapan, setFasSarapan] = useState('');
    const [rating, setRating] = useState('');
    const [imgHotel, setImgHotel] = useState('');
    const [currentHotel, setCurrentHotel] = useState();


    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { getHotelDetailResult } = useSelector((state) => state.hotelReducer);

    const getDetailHotelById = id => {
        HotelDataService.getById(id)
            .then(response => {
                setNamaHotel(response.data.namaHotel)
                setAlamat(response.data.alamat)
                setFasWifi(response.data.fasWifi)
                setFasParkir(response.data.fasParkir)
                setFasSarapan(response.data.fasSarapan)
                setRating(response.data.rating)
                setImgHotel(response.data.imgHotel)

            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        getDetailHotelById(id)
    }, [id])

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

    const onChangeImg = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setImgHotel(val)
    }

    const updateData = () => {
        dispatch(putHotelUpdate({ namaHotel, alamat, fasWifi, fasParkir, fasSarapan, rating, imgHotel }, id))
        console.log(currentHotel)
        navigate('/hotel')
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Hotel</h1>
            </div>
            <Form onSubmit={updateData}>
                {imgHotel ?
                    (<div className={styles.imgBody}>
                        <img src={imgHotel} className={styles.img} />
                    </div>) : null}
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Hotel</Form.Label>
                    <Form.Control type="text" value={namaHotel} className={styles.bodyInput} onChange={onChangeNamaHotel} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" value={alamat} className={styles.bodyInput} onChange={onChangeAlamat} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Fasilitas Wifi</Form.Label>
                    <Form.Select onChange={onChangeFasWifi} value={fasWifi} className={styles.bodyInput}>
                        <option value="1">Tersedia</option>
                        <option value="0">Tidak Tersedia</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Fasilitas Parkir</Form.Label>
                    <Form.Select onChange={onChangeFasParkir} value={fasParkir} className={styles.bodyInput}>
                        <option value="1">Tersedia</option>
                        <option value="0">Tidak Tersedia</option>
                    </Form.Select>

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Fasilitas Sarapan</Form.Label>
                    <Form.Select onChange={onChangeFasSarapan} value={fasSarapan} className={styles.bodyInput}>
                        <option value="1">Tersedia</option>
                        <option value="0">Tidak Tersedia</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" value={rating} className={styles.bodyInput} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>URL Gambar </Form.Label>
                    <Form.Control type="text" value={imgHotel} className={styles.bodyInput} onChange={onChangeImg} />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Ubah
                </Button>
            </Form>
        </div >
    )
}

export default DetailHotel;