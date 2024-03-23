import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";

function Home() {
    const [data, setData] = useState([
        {
            id: uuidv4(),
            nama: 'Kiyotaka',
            umur: 21,
            jenisKelamin: 'Pria'
        },
        {
            id: uuidv4(),
            nama: 'Suzune',
            umur: 21,
            jenisKelamin: 'Wanita'
        },
        {
            id: uuidv4(),
            nama: 'Yagami',
            umur: 20,
            jenisKelamin: 'Pria'
        },
        {
            id: uuidv4(),
            nama: 'Ichika',
            umur: 20,
            jenisKelamin: 'Wanita'
        },
    ]);

    const hapusPengunjung = (id) => {
        const newListPengunjung = data.filter((item) => item.id !== id)
        setData(newListPengunjung);
    };

    const tambahPengunjung = (newUser) => {
        const newPengunjung = { id: uuidv4(), ...newUser };
        setData([...data, newPengunjung]);
    };

    return (
        <>
            <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
            <PassengerInput tambahPengunjung={tambahPengunjung} />
        </>
    );
}

export default Home;
