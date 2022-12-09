import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/tambahkuliner.module.css'
import { useDispatch } from 'react-redux';
import { createPemandu } from '../actions/pemandu';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const TambahPemandu = () => {

    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [desc, setDesc] = useState('');
    const [rating, setRating] = useState('')
    const [imgProfil, setImgProfil] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorDesc, setErrorDesc] = useState('')
    const [errorRating, setErrorRating] = useState('');
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    const mySwal = withReactContent(Swal);

    const onChangeNama = (e) => {
        e.preventDefault();
        const name = e.target.value;
        setNama(name);
    }

    const onChangeEmail = (e) => {
        e.preventDefault();
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        e.preventDefault();
        const password = e.target.value;
        setPassword(password);
    }

    const onChangeDesc = (e) => {
        e.preventDefault();
        const desc = e.target.value;
        setDesc(desc);
    }

    const onChangeRating = (e) => {
        e.preventDefault();
        const rating = e.target.value;
        setRating(rating);
    }

    const onChangeUsername = (e) => {
        e.preventDefault();
        const username = e.target.value;
        setUsername(username);
    }

    const onChangeImgProfil = (e) => {
        e.preventDefault();
        const imgProfil = e.target.value;
        setImgProfil(imgProfil);
    }



    const dispatch = useDispatch();

    const [submitted, setSubmitted] = useState(false);




    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        const form = e.currentTarget;

        if (nama.length === 0 && email.length === 0 && password.length === 0 && username.length === 0) {
            setSuccessful(false);
            setErrorEmail('Wajib diisi');
            setErrorPassword('Wajib diisi');
        }
        else {
            dispatch(createPemandu(nama, username, email, password, desc, rating, imgProfil))
                .then(() => {
                    mySwal.fire({
                        title: 'Berhasil',
                        icon: 'success',
                        text: 'Berhasil ditambahkan',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {

                        navigate('/pemandu')
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

        setValidated(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Tambah Pemandu</h1>
            </div>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Pemandu</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nama pemandu' className={styles.bodyInput} value={nama} onChange={onChangeNama} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan username' className={styles.bodyInput} value={username} onChange={onChangeUsername} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Masukkan email' className={styles.bodyInput} value={email} onChange={onChangeEmail} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Masukkan password' className={styles.bodyInput} value={password} onChange={onChangePassword} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan deskripsi' className={styles.bodyInput} value={desc} onChange={onChangeDesc} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan rating' className={styles.bodyInput} value={rating} onChange={onChangeRating} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>URL Foto Profil</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan URL Foto Profil' className={styles.bodyInput} value={imgProfil} onChange={onChangeImgProfil} />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default TambahPemandu;