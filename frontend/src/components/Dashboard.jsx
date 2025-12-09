import styles from '../styles/Dashboard.module.css'
import addIcon from '../assets/add.svg'
import clearIcon from '../assets/clear.svg'
import searchIcon from '../assets/search.svg'
import Record from './Record'
import { useState } from 'react'
import deleteIcon from "../assets/cancel.svg"
import editIcon from "../assets/edit.svg"
import AddRecord from './AddRecord'

export default function Dashboard(){

    const [idSearch, setIdSearch] = useState("")
    const [descSearch, setDescSearch] = useState("")
    const [addVisible, setAddVisible] = useState(false)
    const [filters, setFilters] = useState({ id: "", nome: "" })

    return(
        <>

            {addVisible && (<AddRecord cancel={() => (setAddVisible(false), fetchData())} />)}

            <div className={styles.container}>

                <div className={styles.searchContainer}>
                    <input value={idSearch} onChange={(e) => setIdSearch(e.target.value)} type="text" placeholder='ID' />
                    <input value={descSearch} onChange={(e) => setDescSearch(e.target.value)} type="text" placeholder='Cliente' />
                </div>

                <div className={styles.actionContainer}>
                    <button onClick={() => setAddVisible(true)}><img src={addIcon} alt="" />Novo</button>
                    <button onClick={() => (setIdSearch(""), setDescSearch(""), setFilters({id: "", nome: ""}))}><img src={clearIcon} alt="" />Limpar</button>
                    <button onClick={() => setFilters({ id: idSearch, nome: descSearch })}><img src={searchIcon} alt="" />Buscar</button>
                </div>

                <div className={styles.sectionContainer}>
                    <ul>
                        <li>ID</li>
                        <li>Cliente</li>
                        <li>E-mail</li>
                        <li>Telefone</li>
                        <span>
                            <img src={editIcon} alt="Editar cliente" />
                            <img src={deleteIcon} alt="Deletar cliente" />
                        </span>
                    </ul>
                </div>

                 <Record filters={filters} />

            </div>
        </>
    )
}