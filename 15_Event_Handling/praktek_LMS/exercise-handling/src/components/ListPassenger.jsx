import ListItem from "./ListItem";
import styles from "../assets/css/ListPassenger.module.css";

function ListPassenger(props) {
    const {data, hapusPengunjung} = props

    return (
    <>
        <div className={styles.tableWrapper}>
            <table className={styles.passengerTable}>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Jenis Kelamin</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((passenger) => <ListItem key={passenger.id} item={passenger} 
                    hapusPengunjung={hapusPengunjung} />)}
                </tbody>
            </table>
        </div>    
    </>
  )
}

export default ListPassenger;