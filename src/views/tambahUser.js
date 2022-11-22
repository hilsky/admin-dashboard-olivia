import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/tambahkuliner.module.css'
import { useDispatch } from 'react-redux';
import { createUser } from '../actions/user';
import { useNavigate } from 'react-router-dom';

const TambahUser = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [errorFullName, setErrorFullName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const onChangeFullName = (e) => {
        const fullName = e.target.value;
        setFullName(fullName);
    }

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const dispatch = useDispatch();

    const [submitted, setSubmitted] = useState(false);




    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        const form = e.currentTarget;

        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (fullName.length === 0 && email.length === 0 && password.length === 0) {
            setSuccessful(false);
            setErrorEmail('Wajib diisi');
            setErrorFullName('Wajib diisi');
            setErrorPassword('Wajib diisi');
        }
        else if (!(email.match(regexp))) {

        }
        else {
            dispatch(createUser(fullName, email, password))
                .then(() => {
                    setSuccessful(true)

                    setFullName('');
                    setPassword('');
                    setEmail('');
                    navigate('/')
                })
                .catch((err) => {
                    setSuccessful(false)
                })
        }

        setValidated(true);
    }


    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Tambah User</h1>
            </div>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nama lengkap' className={styles.bodyInput} value={fullName} onChange={onChangeFullName} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Masukkan email' className={styles.bodyInput} value={email} onChange={onChangeEmail} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan password' className={styles.bodyInput} value={password} onChange={onChangePassword} />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicHari">
                    <Form.Label>Nomor Whatsapp</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nomor whatsapp' className={styles.bodyInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicHari">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan alamat' className={styles.bodyInput} />
                </Form.Group> */}
                <Button variant="primary" type="submit" >
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default TambahUser;