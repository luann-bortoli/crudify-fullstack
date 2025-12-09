import styles from '../styles/AddRecord.module.css'
import addIcon from '../assets/add.svg'
import cancelIcon from '../assets/cancel.svg'
import axios from "axios"
import { useState } from 'react'
import { IMaskInput } from 'react-imask';

export default function AddRecord({cancel}){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    function addClient(){
        if(!nome.trim() || !email.trim() || !telefone.trim()){
            return;
        }
        
        const novoCliente={
            nome,
            email,
            telefone
        }

        axios
            .post("http://127.0.0.1:5000/clientes", novoCliente)
            .then(() => {
                cancel()
            })
            .catch(err => {
                console.error("Erro ao cadastrar:", err)
            })

        
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p>Cadastrar cliente</p>

                    <div className={styles.inputContainer}>
                       
                        <IMaskInput mask={/^[A-Za-zÀ-ÿ\s-]*$/} value={nome} onAccept={(value) => setNome(value)} placeholder="Nome"></IMaskInput>
                        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='E-mail' />
                        
                        <IMaskInput mask="(00) 0 0000-0000" value={telefone} onAccept={(value) => setTelefone(value)} placeholder="Telefone"></IMaskInput>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button onClick={cancel}><img src={cancelIcon}/> Cancelar</button>
                        <button onClick={addClient}><img src={addIcon}/>Cadastrar</button>
                    </div>

                </div>
            </div>
        </>
    )
}