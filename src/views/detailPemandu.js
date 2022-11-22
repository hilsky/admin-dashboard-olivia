import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailpemandu.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { putUserUpdate, deletePemandu, getPemanduDetail } from '../actions/pemanduAction';
import { useDispatch, useSelector } from "react-redux";


const DetailPemandu = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { getPemanduDetailResult, deletePemanduResult } = useSelector((state) => state.pemanduReducer);

    useEffect(() => {
        dispatch(getPemanduDetail(id))
    }, [dispatch])

    const deletePemanduById = (id) => {
        dispatch(deletePemandu(id))
            .then((res) => {
                console.log(res)
                navigate('/pemandu')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Pemandu</h1>
            </div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Lengkap</Form.Label>
                    {getPemanduDetailResult ? (
                        <Form.Control type="text" value={getPemanduDetailResult.nama} className={styles.bodyInput} />
                    ) : (
                        <Form.Control type="text" value="-" className={styles.bodyInput} />
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    {getPemanduDetailResult ? (
                        <Form.Control type="text" value={getPemanduDetailResult.username} className={styles.bodyInput} />
                    ) : (
                        <Form.Control type="text" value="-" className={styles.bodyInput} />
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    {getPemanduDetailResult ? (
                        <Form.Control type="text" value={getPemanduDetailResult.password} className={styles.bodyInput} />
                    ) : (
                        <Form.Control type="text" value="-" className={styles.bodyInput} />
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    {getPemanduDetailResult ? (
                        <Form.Control type="email" value={getPemanduDetailResult.email} className={styles.bodyInput} />
                    ) : (
                        <Form.Control type="email" value="-" className={styles.bodyInput} />
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Deskripsi</Form.Label>
                    {getPemanduDetailResult ? (
                        <Form.Control type="text" value={getPemanduDetailResult.desc} className={styles.bodyInput} />
                    ) : (
                        <Form.Control type="text" value="-" className={styles.bodyInput} />
                    )}

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rating</Form.Label>
                    {getPemanduDetailResult ? (
                        <Form.Control type="text" value={getPemanduDetailResult.rating} className={styles.bodyInput} />
                    ) : (
                        <Form.Control type="text" value="-" className={styles.bodyInput} />
                    )}
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Ubah
                </Button>
                <Button variant="danger" size="sm" >Hapus</Button>
            </Form>
        </div>
    )
}

export default DetailPemandu;