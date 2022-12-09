import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Image } from 'react-bootstrap';
import styles from '../styles/detailuser.module.css'
import { useParams } from 'react-router-dom';
import { putUserUpdate } from '../actions/userAction';
import { useNavigate } from 'react-router-dom';
import UserDataService from '../services/user.service';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


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
    const [imgProfil, setImgProfil] = useState('');
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
    const mySwal = withReactContent(Swal);




    const getDetailUserById = id => {
        UserDataService.getById(id)
            .then(response => {
                setFullName(response.data.fullName)
                setUsername(response.data.username)
                setEmail(response.data.email)
                setPassword(response.data.password)
                setNoWa(response.data.noWa)
                setAlamat(response.data.alamat)
                setImgProfil(response.data.imgProfil)
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        console.log(id)
        getDetailUserById(id)
    }, [id])



    const updateData = () => {
        dispatch(putUserUpdate({ fullName, email, password, username, noWa, alamat, imgProfil }, id))
        navigate('/')

    }

    const onChangeFullName = (e) => {
        e.preventDefault()
        const fullName = e.target.value;
        setFullName(fullName);

    }

    const onChangeEmail = (e) => {
        e.preventDefault()
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        e.preventDefault()
        const password = e.target.value;
        setPassword(password);
    }

    const onChangeUsername = (e) => {
        e.preventDefault()
        const username = e.target.value;
        setUsername(username);
    }

    const onChangeAlamat = (e) => {
        e.preventDefault()
        const alamat = e.target.value;
        setAlamat(alamat);
    }

    const onChangeNoWa = (e) => {
        e.preventDefault()
        const noWa = e.target.value;
        setNoWa(noWa);
    }

    const onChangeImg = (e) => {
        e.preventDefault()
        const img = e.target.value;
        setImgProfil(img);
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
                    {imgProfil ?
                        (<div className={styles.imgBody}>
                            <img src={imgProfil} className={styles.img} />
                        </div>) : null}
                    <Form.Group className="mb-3" >
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" value={fullName} required className={styles.bodyInput} onChange={onChangeFullName} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} required className={styles.bodyInput} onChange={onChangeUsername} />


                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} required className={styles.bodyInput} onChange={onChangeEmail} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        ? <Form.Control type="password" value={password} required className={styles.bodyInput} onChange={onChangePassword} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nomor Whatsapp</Form.Label>
                        <Form.Control type="number" value={noWa} className={styles.bodyInput} onChange={onChangeNoWa} />

                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" value={alamat} className={styles.bodyInput} onChange={onChangeAlamat} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>URL Foto Profil</Form.Label>
                        <Form.Control type="text" value={imgProfil} className={styles.bodyInput} onChange={onChangeImg} />
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