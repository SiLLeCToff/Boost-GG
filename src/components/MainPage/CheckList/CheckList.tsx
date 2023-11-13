
import styles from "./CheckList.module.scss";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch.tsx";

interface listSwitches {
id: number,
    name: string,
    percent: number
}

interface types {
    currentImg: string,
    desireImg: string,
    switches:listSwitches[],
    percents:number,
    calculatedPrice:number,
    handleCheck: (e: number, b: boolean) => void
}


const CheckList = ({currentImg, desireImg, switches, percents, calculatedPrice, handleCheck}: types) => {
    return (
        <div className={styles.result}>
            <h1>
                Чек-лист
            </h1>
            <div className={styles.ranks}>
                <img src={`/src/assets/images/rank_png/${currentImg}`} className="flex w-[40px] h-[40px]" alt="crank" />
                <img src="/src/assets/icons/Chevrons-right.svg" className="flex w-[50px]" alt="chevronsr"/>
                <img src={`/src/assets/images/rank_png/${desireImg}`} className="flex w-[40px] h-[40px]" alt="crank" />
            </div>
            {switches.map((item) => (
                <ToggleSwitch key={item.id} name={item.name} value={item.percent}  onCheck={handleCheck}/>
            ))}
            <h2 className="text-white text-[30px] whitespace-nowrap">Итог: {percents === 0 ? calculatedPrice : calculatedPrice + calculatedPrice*percents/100}$</h2>
        </div>
    );
};

export default CheckList;