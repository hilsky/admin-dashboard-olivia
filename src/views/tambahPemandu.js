import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/tambahkuliner.module.css'
import { useDispatch } from 'react-redux';
import { createPemandu } from '../actions/pemandu';
import { useNavigate } from 'react-router-dom';

const TambahPemandu = () => {

    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [desc, setDesc] = useState('');
    const [rating, setRating] = useState('')
    const [successful, setSuccessful] = useState(false);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorDesc, setErrorDesc] = useState('')
    const [errorRating, setErrorRating] = useState('');
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const onChangeNama = (e) => {
        const name = e.target.value;
        setNama(name);
    }

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const onChangeDesc = (e) => {
        const desc = e.target.value;
        setDesc(desc);
    }

    const onChangeRating = (e) => {
        const rating = e.target.value;
        setRating(rating);
    }

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
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
            dispatch(createPemandu(nama, username, email, password, desc, rating))
                .then(() => {
                    setSuccessful(true)

                    setNama('');
                    setPassword('');
                    setEmail('');
                    setDesc('');
                    setUsername('');
                    setRating('');
                    navigate('/pemandu')
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
                <h1 className={styles.headerText}>Tambah Pemandu</h1>
            </div>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Pemandu</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan nama pemandu' className={styles.bodyInput} value={nama} onChange={onChangeNama} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan username' className={styles.bodyInput} value={username} onChange={onChangeUsername} />
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
                    <Form.Control type="password" placeholder='Masukkan password' className={styles.bodyInput} value={password} onChange={onChangePassword} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan deskripsi' className={styles.bodyInput} value={desc} onChange={onChangeDesc} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder='Masukkan rating' className={styles.bodyInput} value={rating} onChange={onChangeRating} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Tambah
                </Button>
            </Form>
        </div>
    )
}

export default TambahPemandu;