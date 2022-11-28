import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailhotel.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { deleteHotel, getHotelDetail } from '../actions/hotelAction';
import { useDispatch, useSelector } from "react-redux";
import HotelDataService from '../services/hotel.service';

const DetailHotel = () => {

    const [namaHotel, setNamaHotel] = useState('');
    const [alamat, setAlamat] = useState('');
    const [fasWifi, setFasWifi] = useState('');
    const [fasParkir, setFasParkir] = useState('');
    const [fasSarapan, setFasSarapan] = useState('');
    const [rating, setRating] = useState('');
    const [currentHotel, setCurrentHotel] = useState();

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { getHotelDetailResult } = useSelector((state) => state.hotelReducer);

    useEffect(() => {
        dispatch(getHotelDetail(id))
    }, [dispatch])



    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Hotel</h1>
            </div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Hotel</Form.Label>
                    {getHotelDetailResult ?
                        (<Form.Control type="text" value={getHotelDetailResult.namaHotel} className={styles.bodyInput} />)
                        : (<Form.Control type="text" value="-" className={styles.bodyInput} />)}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Alamat</Form.Label>
                    {getHotelDetailResult ?
                        (<Form.Control type="text" value={getHotelDetailResult.alamat} className={styles.bodyInput} />)
                        : (<Form.Control type="text" value="-" className={styles.bodyInput} />)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Fasilitas WIFI</Form.Label>
                    {/* {getHotelDetailResult ?
                        ({
                            getHotelDetailResult.fasWifi !== "0" ?
                                (<Form.Control type="text" value="Tersedia" className={styles.bodyInput} />) : (<Form.Control type="text" value="Tidak Tersedia" className={styles.bodyInput} />)
                        })
                        : (<Form.Control type="text" value="-" className={styles.bodyInput} />)} */}
                    <Form.Control type="text" value="Tersedia" className={styles.bodyInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fasilitas Parkir</Form.Label>
                    <Form.Control type="text" value="Tersedia" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fasilitas Sarapan</Form.Label>
                    <Form.Control type="text" value="Tersedia" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rating</Form.Label>
                    {getHotelDetailResult ?
                        (<Form.Control type="text" value={getHotelDetailResult.rating} className={styles.bodyInput} />)
                        : (<Form.Control type="text" value="-" className={styles.bodyInput} />)}

                </Form.Group>
                <Button variant="primary" type="submit">
                    Ubah
                </Button>

                <Button variant="danger" type="submit" onClick={deleteHotel(id)}>
                    Hapus
                </Button>
            </Form>
        </div>
    )
}

export default DetailHotel;