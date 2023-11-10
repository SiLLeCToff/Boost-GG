
import styles from "./MainBody.module.scss"
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import SelectMenu from "../UI/SelectMenu/SelectMenu.tsx";
import {useState} from "react";
const MainBody = () => {
    const [currentRank, setCurrentRank] = useState(0)
    const [currentNumOfRank, setCurrentNumOfRank] = useState(0)
    const [desireRank, setDesireRank] = useState(0)
    const [desireNumOfRank, setDesireNumOfRank] = useState(0)

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

    const options1: {label: string, value: string}[] = [
        { label: '0-20 RR', value: '0-20 RR' },
        { label: '21-40 RR', value: '21-40 RR' },
        { label: '41-60 RR', value: '41-60 RR' },
        { label: '61-80 RR', value: '61-80 RR' },
        { label: '81-100 RR', value: '81-100 RR' },
    ];

    const servers: {label: string, value: string}[] = [
        {label: "Europe", value: "Europe"},
        {label: "North America", value: "North America"},
        {label: "Asia", value: "Asia"},
    ]

   const HandleCurrentRank = (rankId: number) => {
        setCurrentRank(rankId)
    }

    const HandeNumOfCurrentRank = (numId: number) => {
        setCurrentNumOfRank(numId)
    }

    const HandeDesireRank = (rankId: number) => {
        setDesireRank(rankId)
    }

    const HandeNumOfDesireRank = (numId: number) => {
        setDesireNumOfRank(numId)
    }

   const HandleCurrentRankMenu = (selectedValue: string) => {
            console.log(selectedValue)
   }

   const HandleDesireRankMenu = (selectedValue: string) => {
       console.log(selectedValue)
   }

   const HandleCurrentServer = (selectedValue: string) => {
        console.log(selectedValue)
   }

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
                                        <div key={rank.id} onClick={() =>HandleCurrentRank(rank.id)} className={`${currentRank === rank.id ? "bg-[#35383f]": "bg-[#24272c]"} flex border-t border-t-gray-600 active:border active:border-[#24272c] rounded-[5px] p-[10px] w-[60px] h-[60px] cursor-pointer`}>
                                            <img src={`/src/assets/images/rank_png/${rank.img}`} alt="rank" />
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.numberRank}>
                                    {
                                        numsOfRank.map((num) => (<div key={num.id} onClick={() =>HandeNumOfCurrentRank(num.id)} className={`${currentNumOfRank === num.id ? "bg-[#35383f]": "bg-[#24272c]"} flex justify-center items-center text-[20px] font-normal border-t border-t-gray-600 active:border active:border-[#24272c] rounded-[5px] p-[10px] w-[60px] h-[40px] cursor-pointer`}>{num.name}</div>
                                        ))
                                    }
                                </div>
                                <div className="flex w-[90%] mt-[10px] ite gap-[10px] text-white font-light">
                                    <label>
                                        Current RR
                                        <SelectMenu options={options1} onSelect={HandleCurrentRankMenu} className={styles.selectMenu}/>
                                    </label>
                                    <label>
                                        Server
                                        <SelectMenu options={servers} onSelect={HandleCurrentServer} className={styles.selectMenu}/>
                                    </label>
                                </div>
                            </div>
                            <div className={styles.ranks}>
                                <h2><p>2.</p>Желаемый Ранг</h2>
                                <div className={styles.mainOfRanks}>
                                    {ranks.map((rank) => (
                                        <div key={rank.id} onClick={() =>HandeDesireRank(rank.id)} className={`${desireRank === rank.id ? "bg-[#35383f]": "bg-[#24272c]"}  flex border-t border-t-gray-600 active:border active:border-[#24272c] rounded-[5px] p-[10px] w-[60px] h-[60px] cursor-pointer`}>
                                            <img src={`/src/assets/images/rank_png/${rank.img}`} alt="rank" />
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.numberRank}>
                                    {
                                        numsOfRank.map((num) => (<div key={num.id} onClick={() =>HandeNumOfDesireRank(num.id)} className={`${desireNumOfRank === num.id ? "bg-[#35383f]": "bg-[#24272c]"} flex justify-center items-center text-[20px] font-normal border-t border-t-gray-600 active:border active:border-[#24272c] rounded-[5px] p-[10px] w-[60px] h-[40px] cursor-pointer`}>{num.name}</div>
                                        ))
                                    }
                                </div>
                                <div className="flex w-[90%] mt-[10px] text-white font-light">
                                    <label>
                                        Current RR
                                        <SelectMenu options={options1} onSelect={HandleDesireRankMenu} className={styles.selectMenu} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.result}></div>
            </div>
            <Footer/>
        </>
    );
};

export default MainBody;