import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailuser.module.css'
import { useParams } from 'react-router-dom';
import { getUserDetail, putUserUpdate } from '../actions/userAction';
import { updateUser } from '../actions/user';
import { useNavigate } from 'react-router-dom';
import UserDataService from '../services/user.service';


const DetailUser = () => {

    const initialUserState = {
        fullName: "",
        username: "",
        email: "",
        password: "",
        noWa: "",
        alamat: "",
    }

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [noWa, setNoWa] = useState('');
    const [alamat, setAlamat] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [errorFullName, setErrorFullName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorAlamat, setErrorAlamat] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorNoWa, setErrorNoWa] = useState('');
    const [validated, setValidated] = useState(false);
    const [currentUser, setCurrentUser] = useState(initialUserState)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { getUserDetailResult, getResponDataUser, errorResponDataUser } = useSelector((state) => state.userReducer);



    const getDetailUserById = id => {
        UserDataService.getById(id)
            .then(response => {
                setCurrentUser(response.data)
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        console.log(id)
        getDetailUserById(id)
    }, [id])

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const updateData = () => {
        dispatch(putUserUpdate(currentUser, currentUser._id))
            .then(response => {
                console.log(response)
                window.stop()
            })
            .catch(e => {
                console.log(e)
            })
    }

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

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setAlamat(username);
    }

    const onChangeAlamat = (e) => {
        const alamat = e.target.value;
        setAlamat(alamat);
    }

    const onChangeNoWa = (e) => {
        const noWa = e.target.value;
        setNoWa(noWa);
    }

    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     setSuccessful(false);
    //     const form = e.currentTarget;

    //     var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (form.checkValidity() === false) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //     }

    //     if (fullName.length === 0 && email.length === 0 && password.length === 0) {
    //         setSuccessful(false);
    //         setErrorEmail('Wajib diisi');
    //         setErrorFullName('Wajib diisi');
    //         setErrorPassword('Wajib diisi');
    //     }
    //     else {
    //         dispatch(updateUser(fullName, username, email, password, noWa, alamat))
    //             .then((response) => {
    //                 console.log(response)
    //                 navigate('/')
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     }

    //     setValidated(true);
    // }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Users</h1>
            </div>
            {currentUser ?
                (<Form onSubmit={updateData}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" value={currentUser.fullName} className={styles.bodyInput} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={currentUser.username} className={styles.bodyInput} onChange={handleInputChange} />


                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={currentUser.email} className={styles.bodyInput} onChange={handleInputChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        ? <Form.Control type="password" value={currentUser.password} className={styles.bodyInput} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nomor Whatsapp</Form.Label>
                        <Form.Control type="number" value={currentUser.noWa} className={styles.bodyInput} onChange={handleInputChange} />

                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" value={currentUser.alamat} className={styles.bodyInput} onChange={handleInputChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Ubah
                    </Button>
                </Form>)
                : "Tidak ada data"}
        </div >
    )
}

export default DetailUser;