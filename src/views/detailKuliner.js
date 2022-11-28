import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/detailuser.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { deleteKuliner, getKulinerDetail } from '../actions/kulinerAction';
import { useDispatch, useSelector } from "react-redux";

const DetailKuliner = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { getKulinerDetailResult } = useSelector((state) => state.kulinerReducer);

    useEffect(() => {
        dispatch(getKulinerDetail(id))
    }, [dispatch])


    return (
        <div className={styles.container}>
            <div className={styles.header1}>
                <h1 className={styles.headerText}>Ubah Kuliner</h1>
            </div>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama Kuliner</Form.Label>
                    {getKulinerDetailResult ?
                        (<Form.Control type="text" className={styles.bodyInput} value={getKulinerDetailResult.namaKuliner} />)
                        : (<Form.Control type="text" className={styles.bodyInput} value="-" />)}

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" value="Kuta" className={styles.bodyInput} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Jam buka - tutup</Form.Label>
                    {getKulinerDetailResult ?
                        (<Form.Control type="text" className={styles.bodyInput} value={[getKulinerDetailResult.jamBuka] + "-" + [getKulinerDetailResult.jamTutup]} />)
                        : (<Form.Control type="text" className={styles.bodyInput} value="-" />)}
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Hari buka - tutup</Form.Label>
                    {getKulinerDetailResult ?
                        (<Form.Control type="text" className={styles.bodyInput} value={[getKulinerDetailResult.hariBuka] + "-" + [getKulinerDetailResult.hariTutup]} />)
                        : (<Form.Control type="text" className={styles.bodyInput} value="-" />)}
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Ubah
                </Button>
            </Form>
        </div>
    )
}

export default DetailKuliner;