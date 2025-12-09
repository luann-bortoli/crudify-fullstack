import styles from "../styles/DeleteRecord.module.css"
import verifyIcon from "../assets/verify.svg"
import cancelIcon from "../assets/cancel.svg"
import axios from "axios"

export default function DeleteRecord({clientName, clientId, cancel, setGetData}){

    function deleteClient(clientId){
        axios
            .delete(`http://127.0.0.1:5000/clientes/${clientId}`)
            .then(() => {
                setGetData((oldData) => oldData.filter((cli) => cli.ID !== clientId));
            })
            .catch((err) => {
                console.error("Erro ao deletar cliente:", err)
            })
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p>Confirmar exclusão do cliente: <br /> {clientName} ?</p>

                    <div className={styles.buttonContainer}>
                        <button onClick={() => (deleteClient(clientId), cancel())}> <img src={verifyIcon} alt="Confirmar exclusão" /> Confirmar</button>
                        <button onClick={() => cancel()}> <img src={cancelIcon} alt="Cancelar exclusão" /> Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}