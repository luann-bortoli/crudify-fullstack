import styles from "../styles/Header.module.css"
import icon from '../assets/icon.svg'

export default function Header(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={icon} alt="logo" />
                    <p>Crudify</p>
                </div>
            </div>
        </>
    )
}