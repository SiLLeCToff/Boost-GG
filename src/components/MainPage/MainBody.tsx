import styles from "./MainBody.module.scss"
const MainBody = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.nav}></div>
            </div>
            <div className={styles.main}>main</div>
            <h1 className="text-white">привет пупсик</h1>
        </div>
    );
};

export default MainBody;