
import styles from "./H1.module.scss"

const H1 = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Reach the rank you dreamed
                <div className={styles.aurora}>
                    <div className={styles.auroraItem}></div>
                    <div className={styles.auroraItem}></div>
                    <div className={styles.auroraItem}></div>
                    <div className={styles.auroraItem}></div>
                </div>
            </h1>
        </div>
    );
};

export default H1;