import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailpemandu.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { putPemanduUpdate } from '../actions/pemanduAction';
import { useDispatch, useSelector } from "react-redux";
import PemanduDataService from '../services/pemandu.service';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const DetailPemandu = () => {

    const initialState = {
        nama: "",
        username: "",
        email: "",
        password: "",
        desc: "",
        rating: "",
    }
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [desc, setDesc] = useState('');
    const [rating, setRating] = useState('');
    const [imgProfil, setImgProfil] = useState('');
    const [currentUser, setCurrentUser] = useState(initialState);

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mySwal = withReactContent(Swal)

    const { getPemanduDetailResult, deletePemanduResult } = useSelector((state) => state.pemanduReducer);

    useEffect(() => {
        console.log(id)
        getDetailPemanduById(id)
    }, [id])

    const getDetailPemanduById = id => {
        PemanduDataService.getById(id)
            .then(response => {
                setNama(response.data.nama)
                setUsername(response.data.username)
                setEmail(response.data.email)
                setPassword(response.data.password)
                setDesc(response.data.desc)
                setRating(response.data.rating)
                setImgProfil(response.data.imgProfil)

            })
            .catch(e => {
                console.log(e);
            })
    }

    const onChangeNama = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setNama(val)
    }

    const onChangeUsername = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setUsername(val)
    }

    const onChangeEmail = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setEmail(val)
    }

    const onChangePassword = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setPassword(val)
    }

    const onChangeDesc = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setDesc(val)
    }

    const onChangeRating = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setRating(val)
    }

    const onChangeImg = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setImgProfil(val)
    }



    // 

    const updateData = () => {
        dispatch(putPemanduUpdate({ nama, username, email, password, desc, rating, imgProfil }, id))
        console.log(currentUser)
        navigate('/pemandu')
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Pemandu</h1>
            </div>
            {currentUser ?
                (<Form onSubmit={updateData}>
                    {imgProfil ?
                        (<div className={styles.imgBody}>
                            <img src={imgProfil} className={styles.img} />
                        </div>) : null}
                    <Form.Group className="mb-3" >
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" value={nama} className={styles.bodyInput} onChange={onChangeNama} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} className={styles.bodyInput} onChange={onChangeUsername} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} className={styles.bodyInput} onChange={onChangePassword} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} className={styles.bodyInput} onChange={onChangeEmail} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control type="text" value={desc} className={styles.bodyInput} onChange={onChangeDesc} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" value={rating} className={styles.bodyInput} onChange={onChangeRating} />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Ubah
                    </Button>

                </Form>)
                : <div>Tidak ada Data</div>}
        </div>
    )
}

export default DetailPemandu;