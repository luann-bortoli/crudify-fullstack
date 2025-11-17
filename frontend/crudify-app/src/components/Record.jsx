import styles from "../styles/Record.module.css"

export default function Record(){
    return(
        <>
            <div className={styles.container}>
                    <div className={styles.itemContainer}>
                        <p>98984</p>
                    </div>
                    <div className={styles.itemContainer}>
                        <p>Beatriz Almeida de Assunssão Silva Palmares</p>
                    </div>
                    <div className={styles.itemContainer}>
                        <p>beassunsao@gmail.com</p>
                    </div>
                    <div className={styles.itemContainer}>
                        <p>+55 54 99382472</p>
                    </div>
            </div>
        </>
    )
}