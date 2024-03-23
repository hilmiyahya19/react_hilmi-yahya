import { useState } from "react";
import styles from "../assets/css/PassengerInput.module.css";

function PassengerInput({ tambahPengunjung }) {
    const [formData, setFormData] = useState({
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
        editing: false
    });

    const { nama, umur, jenisKelamin, editing } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = nama && umur && jenisKelamin;
        if (formIsNotEmpty) {
            tambahPengunjung({ nama, umur, jenisKelamin });
            setFormData({
                nama: "",
                umur: "",
                jenisKelamin: "Pria"
            });
        } else {
            alert("Data masih ada yang kosong");
        }
    };

    const handleBukaInput = () => {
        setFormData({
            ...formData,
            editing: true
        });
    };

    const handleTutupInput = () => {
        setFormData({
            ...formData,
            editing: false
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: editing ? 'block' : 'none' }}>
                <p>Masukkan nama anda</p>
                <input type="text" placeholder="nama anda..." value={nama} name="nama" onChange={onChange} />
                <p>Masukkan umur anda</p>
                <input type="text" placeholder="umur anda..." value={umur} name="umur" onChange={onChange} />
                <p>Masukkan jenis kelamin anda</p>
                <select value={jenisKelamin} name="jenisKelamin" onChange={onChange}>
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                </select>
                <button type="submit" className={styles.button}>Submit</button>
                <button type="button" onClick={handleTutupInput} className={styles.button}>Selesai</button>
            </form>
            <button onClick={handleBukaInput} style={{ display: editing ? 'none' : 'inline-block' }} className={`${styles.button} ${styles.masukkanButton}`}>Masukkan nama Pengunjung</button>
        </>
    );
}

export default PassengerInput;
