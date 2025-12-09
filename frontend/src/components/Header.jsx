import styles from '../styles/Header.module.css'
import logoIcon from '../assets/icon.svg'

export default function Header(){
    return(
        <>
            <div className={styles.container}>
                <img src={logoIcon} alt="logo" />
                <p>Crudify</p>
            </div>
        </>
    )
}