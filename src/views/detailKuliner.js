import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailkuliner.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { updateKuliner } from '../actions/kulinerAction';
import { useDispatch, useSelector } from "react-redux";
import KulinerDataService from '../services/kuliner.service';

const DetailKuliner = () => {

    const [namaKuliner, setNamaKuliner] = useState('');
    const [alamat, setAlamat] = useState('');
    const [jamBuka, setJamBuka] = useState('');
    const [jamTutup, setJamTutup] = useState('');
    const [hariBuka, setHariBuka] = useState('');
    const [hariTutup, setHariTutup] = useState('');
    const [imgBg, setImgBg] = useState('')

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getDetailKulinerById = id => {
        KulinerDataService.getById(id)
            .then(response => {
                setNamaKuliner(response.data.namaKuliner)
                setAlamat(response.data.alamat)
                setJamBuka(response.data.jamBuka)
                setJamTutup(response.data.jamTutup)
                setHariBuka(response.data.hariBuka)
                setHariTutup(response.data.hariTutup)
                setImgBg(response.data.imgBg)

            })
            .catch(e => {
                console.log(e);
            })
    }


    useEffect(() => {
        console.log(id)
        getDetailKulinerById(id)
    }, [id])


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

    const onChangeImg = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setImgBg(val)
    }

    const updateData = () => {
        dispatch(updateKuliner({ namaKuliner, alamat, jamBuka, jamTutup, hariBuka, hariTutup, imgBg }, id))

        navigate('/kuliner')
    }

    const optionValue = [
        { value: "Senin", label: "Senin" },
        { value: "Selasa", label: "Selasa" },
        { value: "Rabu", label: "Rabu" },
        { value: "Kamis", label: "Kamis" },
        { value: "Jumat", label: "Jumat" },
        { value: "Sabtu", label: "Sabtu" }
    ]


    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Kuliner</h1>
            </div>

            <Form onSubmit={updateData}>
                {imgBg ?
                    (<div className={styles.imgBody}>
                        <img src={imgBg} className={styles.img} />
                    </div>) : null}
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Kuliner</Form.Label>

                    <Form.Control type="text" className={styles.bodyInput} value={namaKuliner} onChange={onChangeNamaKuliner} />


                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" value={alamat} className={styles.bodyInput} onChange={onChangeAlamat} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Jam buka - Jam tutup</Form.Label>
                    <div className={styles.formBody}>
                        <Form.Control type="text" className={styles.bodyInput} value={jamBuka} onChange={onChangeJamBuka} />
                        <div className={styles.spaceInput}>-</div>
                        <Form.Control type="text" className={styles.bodyInput} value={jamTutup} onChange={onChangeJamTutup} />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Hari buka - Hari tutup</Form.Label>
                    <div className={styles.formBody}>
                        {/* <Form.Select value={hariBuka} className={styles.bodyInput} onChange={onChangeHariBuka}>
                            {/* {optionValue.map((option) => {
                                <option value={option.value}>{option.label}</option>
                            })} */}
                        {/* <option value="Senin">Senin</option>
                            <option value="Selasa">Selasa</option>
                            <option value="Rabu">Rabu</option>
                            <option value="Kamis">Kamis</option>
                            <option value="Jumat">Jumat</option>
                            <option value="Sabtu">Sabtu</option>
                            <option value="Minggu">Minggu</option>
                        </Form.Select>  */}
                        <Form.Control type="text" className={styles.bodyInput} value={hariBuka} onChange={onChangeHariBuka} />
                        <div className={styles.spaceInput}>-</div>
                        <Form.Control type="text" className={styles.bodyInput} value={hariTutup} onChange={onChangeHariTutup} />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>URL Gambar</Form.Label>
                    <Form.Control type="text" value={imgBg} className={styles.bodyInput} onChange={onChangeImg} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ubah
                </Button>
            </Form>
        </div>
    )
}

export default DetailKuliner;