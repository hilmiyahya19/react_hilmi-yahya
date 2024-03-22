import { Component } from "react";
import styles from "../assets/css/PassengerInput.module.css";

class PassengerInput extends Component {
    state = {
        nama: "",
        umur: "",
        jenisKelamin:"Pria",
        editing: true
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formIsNotEmpty = this.state.nama && this.state.umur && this.state.jenisKelamin 
        if(formIsNotEmpty){
            const newData = {
                nama: this.state.nama,
                umur: this.state.umur,
                jenisKelamin: this.state.jenisKelamin,
            }
            this.props.tambahPengunjung(newData);
            this.setState({
                nama: "",
                umur: "",
                jenisKelamin: "Pria"
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    handleBukaInput = () => {
        this.setState({
            editing: false
        })
    }

    handleTutupInput = () => {
        this.setState({
            editing: true
        })
    }

    render() {
        const viewMode = {};
        const editMode = {};

        if (this.state.editing) {
            viewMode.display = 'none';
        } else {
            editMode.display = 'none';
        }

        return (
            <>
                <form onSubmit={this.handleSubmit} style={viewMode}>
                    <p>Masukkan nama anda</p>
                    <input type="text" placeholder="nama anda..." value={this.state.nama} name="nama" onChange={this.onChange}/>
                    <p>Masukkan umur anda</p>
                    <input type="text" placeholder="umur anda..." value={this.state.umur} name="umur" onChange={this.onChange}/>
                    <p>Masukkan jenis kelamin anda</p>
                    <select value={this.state.jenisKelamin} name="jenisKelamin" onChange={this.onChange}>
                        <option value="Pria" selected>Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>
                    <button type="submit" className={styles.button}>Submit</button>
                    <button type="button" onClick={this.handleTutupInput} className={styles.button}>Selesai</button>
                </form>
                <button onClick={this.handleBukaInput} style={editMode} className={`${styles.button} ${styles.masukkanButton}`}>Masukkan nama Pengunjung
                </button>
            </> 
        )
    }
}

export default PassengerInput;