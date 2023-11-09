
import styles from "./MainBody.module.scss"
import Header from "../Header/Header.tsx";
const MainBody = () => {

    return (
        <>
        <div className={styles.container}>
            <img src="src/assets/images/bgzip.jpg" className={styles.background}/>
            <Header/>
            <div className="flex w-full h-full">
                <div className={styles.navbar}>
                    <div className={styles.nav}></div>
            </div>
            <div className={styles.main}>
                <div className={styles.head}>
                    <h1 >VALORANT Boosting Service</h1>
                </div>
                <div className={styles.valo}>
                    <h1 className="flex text-white font-bold text-[24px] opacity-100">Valorant Boosting</h1>
                </div>
            </div>
            </div>
        </div>
            <div className="flex bg-black w-full h-screen">

            </div>
        </>
    );
};

export default MainBody;