import React from 'react';
import styles from '../styles/login.module.css';

const Login = () => {
    return (
        <div className={styles.Container}>
            <div>
                <label>Masukan Nama</label>
                <input type="text" placeholder='Masukan Nama' />
            </div>
        </div>
    )
}

export default Login;