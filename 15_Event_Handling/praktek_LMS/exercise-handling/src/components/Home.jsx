import { Component } from "react";
import {v4 as uuidv4} from "uuid";
import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id: uuidv4(),
                    nama: 'Kiyotaka',
                    umur: 16,
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Suzune',
                    umur: 16,
                    jenisKelamin: 'Wanita'
                },
                {
                    id: uuidv4(),
                    nama: 'Yagami',
                    umur: 15,
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Ichika',
                    umur: 15,
                    jenisKelamin: 'Wanita'
                },
            ]
        }
    }

    hapusPengunjung = (id) => {
        const newListPengunjung = this.state.data.filter((item) => item.id !== id )
        this.setState({data : newListPengunjung})
    }

    tambahPengunjung = (newUser) => {
        const newPengunjung = {id : uuidv4(), ...newUser}

        this.setState({data : [...this.state.data, newPengunjung]})
    }

    render() {
        return (
            <div>
                <ListPassenger data={this.state.data} hapusPengunjung={this.hapusPengunjung} />
                <PassengerInput/>
            </div>
        )
    }
}

export default Home;