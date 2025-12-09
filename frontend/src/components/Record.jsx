import styles from "../styles/Record.module.css"
import axios from "axios"
import { useState, useEffect } from "react"
import deleteIcon from "../assets/cancel.svg"
import editIcon from "../assets/edit.svg"
import DeleteRecord from './DeleteRecord'
import EditRecord from './EditRecord'

export default function Record({filters}){

    const [getData, setGetData] = useState([])
    const [delVisible, setDelVisible] = useState(false)
    const [clientName, setClientName] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [clientTelefone, setClientTelefone] = useState("")
    const [clientId, setClientId] = useState(0)
    const [editVisible, setEditVisible] = useState(false)

    function fetchData() {
        axios
            .get("http://127.0.0.1:5000/clientes")
            .then((res) => {
                setGetData(res.data);
            })
            .catch((err) => {
                console.error("Erro ao buscar dado:", err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = getData.filter(cliente => {
        const matchId =
            filters.id.trim() === "" ||
            String(cliente.ID).includes(filters.id);

        const matchNome =
            filters.nome.trim() === "" ||
            cliente.nome.toLowerCase().includes(filters.nome.toLowerCase());

        return matchId && matchNome;
    });

    return(
        <>

            {delVisible && (<DeleteRecord setGetData={setGetData} clientId={clientId} clientName={clientName} cancel={() => (setDelVisible(false), fetchData())} />)}
            {editVisible && (<EditRecord fetchData={fetchData} cancel={()=> setEditVisible(false)} id={clientId} nome={clientName} email={clientEmail} telefone={clientTelefone} />)}

            <div className={styles.container}>
                {filteredData.map((data, index) => (
                    <div key={data.ID} className={styles.item}>
                        <ul>
                            <li>{data.ID}</li>
                            <li>{data.nome}</li>
                            <li>{data.email}</li>
                            <li style={{borderRight: "none"}}>
                                {data.telefone}
                            </li>
                            <span>
                                    <img onClick={() => (setEditVisible(true), setClientId(data.ID), setClientName(data.nome), setClientEmail(data.email), setClientTelefone(data.telefone))} src={editIcon} alt="Editar cliente" />
                                    <img onClick={() => (setDelVisible(true), setClientName(data.nome), setClientId(data.ID))} src={deleteIcon} alt="Deletar cliente" />
                            </span>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}