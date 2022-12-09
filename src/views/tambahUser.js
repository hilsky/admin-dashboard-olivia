import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, InputGroup, Col } from 'react-bootstrap';
import styles from '../styles/tambahuser.module.css'
import { useDispatch } from 'react-redux';
import { createUser } from '../actions/user';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const TambahUser = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [imgProfil, setImgProfil] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [errorFullName, setErrorFullName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    const mySwal = withReactContent(Swal);

    const onChangeFullName = (e) => {
        const fullName = e.target.value;
        setFullName(fullName);
    }

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const onChangeImgProfil = (e) => {
        const imgProfil = e.target.value;
        setImgProfil(imgProfil);
    }

    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        const form = e.currentTarget;

        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else if (!(email.match(regexp))) {
            setValidated(false)
            setSuccessful(false);
            setErrorEmail('Masukan email yang valid')
        }
        else if (password.length < 8) {
            setValidated(false)
            setSuccessful(false);
            setErrorPassword('Password harus diisi minimal 8 karakter')
        }
        else if (username.length < 4) {
            setValidated(false);
            setSuccessful(false);
            setErrorUsername('Username harus diisi minimal 4 karakter')
        }
        else {
            dispatch(createUser(fullName, username, email, password, imgProfil))
                .then(() => {
                    mySwal.fire({
                        title: 'Berhasil',
                        icon: 'success',
                        text: 'Berhasil ditambahkan',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {

                        navigate('/')
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
                <h1 className={styles.headerText}>Tambah User</h1>
            </div>

            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control required type="text" placeholder='Masukkan nama lengkap' className={styles.bodyInput} value={fullName} onChange={onChangeFullName} />
                    {errorFullName ? (
                        <Alert>{errorFullName}</Alert>
                    ) : null}
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="text" placeholder='Masukkan username' className={styles.bodyInput} value={username} onChange={onChangeUsername} />
                    {errorUsername ? (
                        <Alert variant='danger' className={styles.alertBody}>{errorUsername}</Alert>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder='Masukkan email' className={styles.bodyInput} value={email} onChange={onChangeEmail} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control required type="password" placeholder='Masukkan password' className={styles.bodyInput} value={password} onChange={onChangePassword} />
                    {errorPassword ? (
                        <Alert variant='danger' className={styles.alertBody}>{errorPassword}</Alert>
                    ) : null}
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicHari">
                    <Form.Label>Nomor Whatsapp</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nomor whatsapp' className={styles.bodyInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicHari">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan alamat' className={styles.bodyInput} />
                </Form.Group> */}
                <Form.Group className="mb-3">
                    <Form.Label >URL Foto Profil</Form.Label>
                    <Form.Control required type="text" placeholder='Masukkan URL Foto Profil' className={styles.bodyInput} value={imgProfil} onChange={onChangeImgProfil} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default TambahUser;