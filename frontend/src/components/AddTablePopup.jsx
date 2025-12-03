import styles from '../styles/addTablePopup.module.css'
import cancelIcon from '../assets/cancel.svg'
import addIcon from '../assets/add.svg'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'

export default function addTablePopup( {fechar, enviar} ){

    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>Cadastrar cliente</p>

                    <div className={styles.inputContainer}>
                        <div className={styles.leftContent}>
                            <input value={id} onChange={e =>{
                                const keepNumber = e.target.value.replace(/\D/g,"");
                                setId(keepNumber)
                            }} type="text" placeholder='ID' />
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
                        </div>
                        <div className={styles.rightContent}>
                            <input value={nome} onChange={e => setNome(e.target.value)} type="text" placeholder='Nome' />
                            <IMaskInput mask="(00) 0 0000-0000" value={telefone} onAccept={(value) => setTelefone(value)} placeholder="Telefone">

                            </IMaskInput>
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button onClick={fechar}><img src={cancelIcon}/>Cancelar</button>
                        <button onClick={() => enviar({id, nome, email, telefone})}><img src={addIcon}/>Cadastrar</button>
                    </div>

                </div>
            </div>
        </>
    )
}