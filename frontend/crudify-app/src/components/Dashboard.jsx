import styles from '../styles/Dashboard.module.css'
import addIcon from '../assets/add.svg'
import clearIcon from '../assets/clear.svg'
import searchIcon from '../assets/search.svg'
import Record from './Record'

export default function Dashboard(){
    return(
        <>
            <div className={styles.container}>
                
                <div className={styles.searchContainer}>
                    <input placeholder='ID' type="text" />
                    <input placeholder='Descrição' type="text" />
                </div>

                <div className={styles.controlContainer}>
                    <button className={styles.controlButton}><img src={addIcon}/>Novo</button>
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
                    <Record />
                </div>

                
            </div>
        </>
    )
}