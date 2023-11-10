
import styles from "./MainBody.module.scss"
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
const MainBody = () => {

   const ranks: {name: string, id: number, img: string}[] = [
        {name: "Железо", id: 1, img: "Iron.png"},
       {name: "Бронза", id: 2, img: "Bronze.png"},
       {name: "Серебро", id: 3, img: "Silver.png"},
       {name: "Золото", id: 4, img: "Gold.png"},
       {name: "Платина", id: 5, img: "Platinum.png"},
       {name: "Алмаз", id: 6, img: "Diamond.png"},
       {name: "Расцвет", id: 7, img: "Ascendant.png"},
       {name: "Бессмертный", id: 8, img: "Immortal.png"},
       {name: "Радиант", id: 9, img: "Radiant.png"},
    ]

    const numsOfRank: {name: string, id: number}[] = [
        {name: "I", id: 1},
        {name: "II", id: 2},
        {name: "III", id: 3},
    ]


    return (
        <>
        <div className={styles.container}>
            <img src="src/assets/images/bgzip.jpg" className={styles.background} alt="background"/>
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
                            <div className={styles.ranks}>
                                <h2><p>1.</p>Текущий Ранг</h2>
                                <div className={styles.mainOfRanks}>
                                    {ranks.map((rank) => (
                                        <div key={rank.id} className="flex bg-gray-200 border-gray-300 border rounded-[10px] p-[10px] w-[60px] h-[60px]">
                                            <img src={`/src/assets/images/rank_png/${rank.img}`} alt="rank" />
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.numberRank}>
                                    {
                                        numsOfRank.map((num) => (<div className="flex justify-center items-center text-[20px] font-normal bg-gray-200 border-gray-300 border rounded-[10px] p-[10px] w-[60px] h-[40px] ">{num.name}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles.ranks}>
                                <h2><p>2.</p>Желаемый Ранг</h2>
                                <div className={styles.mainOfRanks}>
                                    {ranks.map((rank) => (
                                        <div key={rank.id} className="flex bg-gray-200 border-gray-300 border rounded-[10px] p-[10px]  w-[60px] h-[60px]">
                                            <img src={`/src/assets/images/rank_png/${rank.img}`} alt="rank" />
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.numberRank}>
                                    {
                                        numsOfRank.map((num) => (<div className="flex justify-center items-center text-[20px] font-normal bg-gray-200 border-gray-300 border rounded-[10px] p-[10px] w-[60px] h-[40px] ">{num.name}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.other}>2block</div>
                    </div>
                </div>
                <div className={styles.result}></div>
            </div>
            <Footer/>
        </>
    );
};

export default MainBody;