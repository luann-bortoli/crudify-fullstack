import styles from '../styles/Dashboard.module.css'
import addIcon from '../assets/add.svg'
import clearIcon from '../assets/clear.svg'
import searchIcon from '../assets/search.svg'
import Record from './Record'
import AddTablePopup from './AddTablePopup'
import { useState } from 'react'

export default function Dashboard(){

    const [addVisible, setAddVisible] = useState(false)
    const [record, setRecord] = useState([])

    const handleSetAdd = () =>{
        setAddVisible(!addVisible)
    }

    const handleOutput = async (data) =>{
        const res = await fetch("http://localhost:8080/clientes", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        });

        const clienteCriado = await res.json();
        setRecord(prev => [...prev, clienteCriado]);
        setAddVisible(false)
    }

    return(
        <>
            {addVisible &&(<AddTablePopup fechar={handleSetAdd} enviar={handleOutput} />)}
            
            <div className={styles.container}>
                
                <div className={styles.searchContainer}>
                    <input placeholder='ID' type="text" />
                    <input placeholder='Descrição' type="text" />
                </div>

                <div className={styles.controlContainer}>
                    <button onClick={handleSetAdd} className={styles.controlButton}><img src={addIcon}/>Novo</button>
                    <button className={styles.controlButton}><img src={clearIcon}/>Limpar</button>
                    <button className={styles.controlButton}><img src={searchIcon}/>Buscar</button>
                </div>

                <div className={styles.dataTable}>
                    <div className={styles.dataSections}>
                        <p>ID</p>
                        <p>Cliente</p>
                        <p>Email</p>
                        <p>Telefone</p>
                    </div>
                    {record.map(cliente => (
                        <Record 
                            key={cliente.id}
                            id={cliente.id}
                            nome={cliente.nome}
                            email={cliente.email}
                            telefone={cliente.telefone}
                        />
                    ))}
                </div>

                
            </div>
        </>
    )
}