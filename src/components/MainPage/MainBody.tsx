import {useState, useMemo} from "react";
import styles from "./MainBody.module.scss"
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import SelectMenu from "../UI/SelectMenu/SelectMenu.tsx";
import {calculateTotalPrice} from "./Calculator/calculateTotalPrice.tsx";
import SpanHeader from "./SpanHeader/SpanHeader.tsx";
import WhyWe from "./WhyWe/WhyWe.tsx";
import CheckList from "./CheckList/CheckList.tsx";


const MainBody = () => {
    const [ranks, setRanks] = useState({
        currentRank: 2,
        currentNumOfRank: 1,
        currentColor: "hsl(40,79%,20%)",
        currentImg: "Bronze.png",
        desireRank: 6,
        desireNumOfRank: 3,
        desireColor: "hsl(266,80%,68%)",
        desireImg: "Diamond.png",

    })
    const [percents, setPercents] = useState(0)

    const colorObject = {
        currentColor: ranks.currentColor,
        desireColor: ranks.desireColor,
    };

// Передача цвета в CSS
    document.documentElement.style.setProperty('--color-current', colorObject.currentColor);
    document.documentElement.style.setProperty('--color-desire', colorObject.desireColor);

   const ranksList: {name: string, id: number, img: string, prices: object, color: string}[] = [
        {name: "Железо", id: 1, img: "Iron.png", prices: { 1: 5, 2: 5, 3: 5 }, color: "hsl(210, 2%, 49%)"},
       {name: "Бронза", id: 2, img: "Bronze.png", prices: { 1: 6, 2: 7, 3: 8 }, color: "hsl(39,70%,42%)"},
       {name: "Серебро", id: 3, img: "Silver.png", prices: { 1: 15, 2: 16, 3: 17 }, color: "hsl(205,8%,72%)"},
       {name: "Золото", id: 4, img: "Gold.png", prices: { 1: 30, 2: 31, 3: 34 }, color: "hsl(48,77%,61%)"},
       {name: "Платина", id: 5, img: "Platinum.png", prices: { 1: 45, 2: 46, 3: 47 }, color: "hsl(189,53%,38%)"},
       {name: "Алмаз", id: 6, img: "Diamond.png", prices: { 1: 60, 2: 65, 3: 68 }, color: "hsl(266,80%,68%)"},
       {name: "Расцвет", id: 7, img: "Ascendant.png", prices: { 1: 75, 2: 78, 3: 78 }, color: "hsl(146,52%,31%)"},
       {name: "Бессмертный", id: 8, img: "Immortal.png", prices: { 1: 60, 2: 65, 3: 70 }, color: "hsl(339,71%,32%)"},
       {name: "Радиант", id: 9, img: "Radiant.png", prices: { 1: 500, 2: 500, 3: 500 }, color: "hsl(36,60%,42%)"},
    ]

    const switches: {id: number, name: string, percent: number}[] = [
        {id: 1, name: "Трансляция", percent: 15},
        {id: 2, name: "Игра с Бустером", percent: 40},
        {id: 3, name: "Solo Play", percent: 40},
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

    const calculatedPrice = useMemo(() => {
        return calculateTotalPrice({
            currentRank : ranks.currentRank,
            desireRank : ranks.desireRank,
            currentNumOfRank : ranks.currentNumOfRank,
            desireNumOfRank : ranks.desireNumOfRank,
            ranksList,
        }
        );

    }, [ranks.currentRank, ranks.desireRank, ranks.currentNumOfRank, ranks.desireNumOfRank, ranksList]);


   const HandleCurrentRank = (rankId: number, color: string, img: string) => {
        setRanks((prev) => ({...prev,
            currentRank: rankId,
            currentColor: color,
            currentImg: img,
        }))
    }

    const HandeNumOfCurrentRank = (numId: number) => {
       setRanks((prev) => ({
           ...prev,
           currentNumOfRank: numId
       }))
    }

    const HandeDesireRank = (rankId: number,color: string, img: string) => {
        setRanks((prev) => ({...prev,
            desireRank: rankId,
            desireColor: color,
            desireImg: img,
        }))
    }

    const HandeNumOfDesireRank = (numId: number) => {
        setRanks((prev) => ({
            ...prev,
            desireNumOfRank: numId
        }))
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

    const handleCheck = (value: number, isChecked: boolean) => {
       isChecked ? setPercents(percents + value) : setPercents(percents - value);
    };
    return (
        <>
        <div className={styles.container}>
            <img src="/src/assets/images/bg.png" className={styles.background} alt="background"/>
            <Header/>
            <div className="flex w-full h-full">
            <div className={styles.main}>
                <div className={styles.head}>
                    <SpanHeader/>
                </div>
            </div>
            </div>
        </div>
            <div className={styles.block2}>
                <div className="flex w-full gap-[20px]">
                    <div className={styles.menu}>
                        <div className={styles.calculator}>
                            <div className={styles.rank}>
                                <div className={styles.currentRank}>
                                    <h2><p>1.</p>Текущий Ранг</h2>
                                    <div className={styles.mainOfRanks}>
                                        {ranksList.map((rank) => (
                                            <div key={rank.id} onClick={() =>HandleCurrentRank(rank.id, rank.color,rank.img)} className={`${ranks.currentRank === rank.id ? "bg-[#35383f]" : "bg-[#24272c]"} flex border-t border-t-gray-600 active:border active:border-[#24272c] rounded-[5px] p-[10px] w-[60px] h-[60px] cursor-pointer hover:bg-[#35383f]`}>
                                                <img src={`/src/assets/images/rank_png/${rank.img}`} alt="rank" draggable="false"/>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.numberRank}>
                                        {
                                            numsOfRank.map((num) => (<div key={num.id} onClick={() =>HandeNumOfCurrentRank(num.id)} className={`${ranks.currentNumOfRank === num.id ? "bg-[#35383f]": "bg-[#24272c]"} flex justify-center items-center text-[20px] font-normal border-t border-t-gray-600 active:border active:border-[#24272c] rounded-[5px] p-[10px] w-[60px] h-[40px] hover:bg-[#35383f] cursor-pointer`}>{num.name}</div>
                                            ))
                                        }
                                    </div>
                                    <div className="flex w-[90%] mt-[10px] ite gap-[10px] text-white font-light">
                                        <label>
                                            текущий RR
                                            <SelectMenu options={options1} onSelect={HandleCurrentRankMenu} className={styles.selectMenu}/>
                                        </label>
                                        <label>
                                            Сервер
                                            <SelectMenu options={servers} onSelect={HandleCurrentServer} className={styles.selectMenu}/>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.desireRank}>
                                    <h2><p>2.</p>Желаемый Ранг</h2>
                                    <div className={styles.mainOfRanks}>
                                        {ranksList.map((rank) => (
                                            <div key={rank.id} onClick={() =>HandeDesireRank(rank.id, rank.color, rank.img)} className={`${ranks.desireRank === rank.id ? "bg-[#35383f]": "bg-[#24272c]"}  flex border-t border-t-gray-600 active:border active:border-[#24272c] rounded-[5px] p-[10px] w-[60px] h-[60px] hover:bg-[#35383f] cursor-pointer`}>
                                                <img src={`/src/assets/images/rank_png/${rank.img}`} alt="rank" draggable="false" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.numberRank}>
                                        {
                                            numsOfRank.map((num) => (<div key={num.id} onClick={() =>HandeNumOfDesireRank(num.id)} className={`${ranks.desireNumOfRank === num.id ? "bg-[#35383f]": "bg-[#24272c]"} flex justify-center items-center text-[20px] font-normal border-t border-t-gray-600 active:border active:border-[#24272c] rounded-[5px] p-[10px] w-[60px] h-[40px] hover:bg-[#35383f] cursor-pointer`}>{num.name}</div>
                                            ))
                                        }
                                    </div>
                                    <div className="flex w-[90%] mt-[10px] text-white font-light">
                                        <label>
                                            RR
                                            <SelectMenu options={options1} onSelect={HandleDesireRankMenu} className={styles.selectMenu} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CheckList currentImg={ranks.currentImg} desireImg={ranks.desireImg} switches={switches} percents={percents} calculatedPrice={calculatedPrice} handleCheck={handleCheck}/>
                </div>
                <WhyWe/>

            </div>
            <Footer/>
        </>
    );
};

export default MainBody;