import { useRef, useState } from "react"
import styles from "./FormBuku.module.css"

function FormPage() {

    const dataKosong = {
        judul: "",
        pengarang: "",
        cetakan: "",
        tahunTerbit: 0,
        kotaTerbit: "",
        harga: 0,
    }

    const [data, setData] = useState(dataKosong);
    const regex = /^[A-Za-z ]*$/; // Regex untuk memeriksa apakah string hanya terdiri dari huruf dan spasi
    const [errMsg, setErrMsg] = useState("")
    const fotoSampul = useRef(null)

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "pengarang"){
            if (regex.test(value)){
                setErrMsg("")
            } else {
                setErrMsg("Nama Pengarang Harus Berupa Huruf")
            }
        }

        setData({
            ...data,
            [name]: value
        })
        console.log("data", data);
    }

    const handleSubmit = (e) => {
        if (errMsg !== "") {
            alert("Terdapat data yang tidak sesuai")
        } else {
            const alertMessage = `Data Buku Berhasil Diterima \nJudul : ${data.judul}\nPengarang : ${data.pengarang}\nCetakan : ${data.cetakan}\nTahun Terbit : ${data.tahunTerbit}\nKota Terbit : ${data.kotaTerbit}\nHarga : ${data.harga}`
            alert(alertMessage)
        }
        resetData() // mengkosongkan data pada form input setelah alert hilang
        e.preventDefault() // agar ketika di submit, setelah alert hilang, halaman gk akan ke reload (yg menyebabkan semua data pada input menjadi kosong)
    }

    const resetData = () => {
        setData(dataKosong);
        setErrMsg("");
    }

  return (
    <>
        <h1 style={{"textAlign":"center"}}>Formulir Buku Baru</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="">
                <p>Judul :</p>
                <input 
                type="text" 
                name="judul"
                required
                value={data.judul}
                onChange={handleInput}
                className={styles.input}/>
            </label>
            <label htmlFor="">
                <p>Pengarang :</p>
                <input 
                type="text" 
                name="pengarang"
                required
                value={data.pengarang}
                onChange={handleInput}
                className={styles.input}/>
            </label>
            <label htmlFor="">
                <p>Cetakan :</p>
                <input 
                type="text" 
                name="cetakan"
                value={data.cetakan}
                onChange={handleInput}
                className={styles.input}/>
            </label>
            <label htmlFor="">
                <p>Tahun Terbit :</p>
                <input 
                type="number" 
                name="tahunTerbit"
                value={data.tahunTerbit}
                onChange={handleInput}
                className={styles.input}/>
            </label>
            <label htmlFor="">
                <p>Kota Terbit :</p>
                <input 
                type="text" 
                name="kotaTerbit"
                value={data.kotaTerbit}
                onChange={handleInput}
                className={styles.input}/>
            </label>
            <label htmlFor="">
                <p>Harga :</p>
                <input 
                type="number" 
                name="harga"
                value={data.harga}
                onChange={handleInput}
                className={styles.input}/>
            </label>
            <label htmlFor="">
                <p>Foto Sampul :</p>
                <input 
                type="file" 
                name=""
                ref={fotoSampul}
                className={styles.input}/>
            </label>
            <span className={styles.errorMessage}>{errMsg}</span>
            <br />
            <input type="submit" value="Submit" />
            <button type="reset" onClick={resetData}>Reset</button>
        </form>
    </>
  )
}

export default FormPage