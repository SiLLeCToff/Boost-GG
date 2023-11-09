
import styles from "./MainBody.module.scss"
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
const MainBody = () => {

   const ranks: {name: string, id: number}[] = [
        {name: "Железо", id: 1},
       {name: "Бронза", id: 2},
       {name: "Серебро", id: 3},
       {name: "Золото", id: 4},
       {name: "Железо", id: 5},
       {name: "Платина", id: 6},
       {name: "Алмаз", id: 7},
       {name: "Расцвет", id: 8},
       {name: "Бессмертный", id: 9},
       {name: "Радиант", id: 10},
    ]


    return (
        <>
        <div className={styles.container}>
            <img src="src/assets/images/bgzip.jpg" className={styles.background}/>
            <Header/>
            <div className="flex w-full h-full">
            <div className={styles.main}>
                <div className={styles.head}>
                    <h1>VALORANT Boosting Service</h1>
                    <h1>Reach the rank you dreamed</h1>
                </div>
            </div>
            </div>
        </div>
            <div className={styles.block2}>
                <div className={styles.menu}>
                    <h1>Расчитайте Стоимость Бустинга</h1>
                    <div className={styles.calculator}>
                        <div className={styles.rank}>
                            <div className="flex flex-col  w-[50%] justify-between">
                                <h1>Текущий Ранг</h1>
                                <div className="flex flex-wrap w-full gap-[10px] h-[300px]">
                                    {ranks.map((rank) => (
                                        <div key={rank.id} className="flex bg-white w-[70px] h-[70px]">
                                            <img src="" alt="rank" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex w-[50%]">
                                <h1>Желаемый Ранг</h1>
                            </div>
                        </div>
                        <div className={styles.other}>2block</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MainBody;