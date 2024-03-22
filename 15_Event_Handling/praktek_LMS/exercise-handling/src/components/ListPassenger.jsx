import ListItem from "./ListItem";

function ListPassenger(props) {
    const {data, hapusPengunjung} = props

    return (
    <>
        <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
            <thead bgcolor="red">
                <td>Nama</td>
                <td>Umur</td>
                <td>Jenis Kelamain</td>
            </thead>
            <tbody>
                {data.map((passenger) => <ListItem key={passenger.id} item={passenger} 
                hapusPengunjung={hapusPengunjung} />)}
            </tbody>
        </table>
    </>
  )
}

export default ListPassenger;