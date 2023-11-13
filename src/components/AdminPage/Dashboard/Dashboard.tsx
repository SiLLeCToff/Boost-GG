import styles from '../AdminPage.module.scss'


const Dashboard = ({name}: {name: string}) => {
    return (
        <>
            <div className={styles.welcome}>
                <h1><span>Добро Пожаловать, &nbsp;</span><p>{name}</p></h1>
            </div>
            <div className={styles.block}>
                <div className={styles.news}>
                    <h1>HELLO</h1>
                </div>
            </div>
        </>
    );
};

export default Dashboard;