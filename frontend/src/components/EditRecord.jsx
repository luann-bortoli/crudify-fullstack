import styles from "../styles/EditRecord.module.css"
import { IMaskInput } from 'react-imask'
import { useState } from "react"
import axios from 'axios'
import verifyIcon from '../assets/verify.svg'
import cancelIcon from '../assets/cancel.svg'

export default function EditRecord({fetchData, cancel, id, nome, email, telefone}){

    const [clientNome, setClientNome] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [clientTelefone, setClientTelefone] = useState("")

    function aplicarMudancas() {
    const atualizado = {
        nome: clientNome.trim() === "" ? nome : clientNome,
        email: clientEmail.trim() === "" ? email : clientEmail,
        telefone: clientTelefone.trim() === "" ? telefone : clientTelefone
    }

    axios
        .put(`http://127.0.0.1:5000/clientes/${id}`, atualizado)
        .then(() => {
            fetchData()
            cancel()
        })
        .catch(err => console.error("Erro ao editar:", err))
}

    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p>Editar credenciais</p>
                    <div className={styles.inputContainer}>
                        <IMaskInput mask={/^[A-Za-zÀ-ÿ\s-]*$/} value={clientNome} onAccept={(value) => setClientNome(value)} placeholder={nome}></IMaskInput>
                        <IMaskInput type="email" value={clientEmail} onAccept={(value) => setClientEmail(value)} placeholder={email}></IMaskInput>
                        <IMaskInput mask={"(00) 0 0000-0000"} value={clientTelefone} onAccept={(value) => setClientTelefone(value)} placeholder={telefone}></IMaskInput>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={cancel}><img src={cancelIcon} alt="" />Cancelar</button>
                        <button onClick={aplicarMudancas}><img src={verifyIcon} alt="" />Aplicar mudanças</button>
                    </div>
                </div>
            </div>
        </>
    )
}