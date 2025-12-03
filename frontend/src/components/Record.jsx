import styles from "../styles/Record.module.css"
import clearIcon from '../assets/cancel.svg'
import editIcon from '../assets/edit.svg'

export default function Record({id, nome, email, telefone}){
    return(
        <>
            <div className={styles.container}>
                    <div className={styles.itemContainer}>
                        <p>{id}</p>
                    </div>
                    <div className={styles.itemContainer}>
                        <p>{nome}</p>
                    </div>
                    <div className={styles.itemContainer}>
                        <p>{email}</p>
                    </div>
                    <div className={styles.itemContainer}>
                        <p>{telefone}</p>
                        <div className={styles.toolsContainer}>
                            <img src={editIcon} alt="Editar item" />
                            <img src={clearIcon} alt="Abrir item" />
                        </div>
                    </div>
            </div>
        </>
    )
}