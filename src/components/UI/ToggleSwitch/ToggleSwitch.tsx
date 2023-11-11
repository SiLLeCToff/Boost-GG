import styles from "../../MainPage/MainBody.module.scss";
import {useState} from "react";



const ToggleSwitch= ({name, onCheck, value} : {name: string, onCheck:(e: number, b: boolean)=> void, value: number}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);
        onCheck(value, !isChecked); // Передаем значение и его состояние в родительский компонент
    };
    return (
        <div className="flex gap-x-[5px] w-full font-light text-white justify-between items-center">
            <div className="flex gap-x-[10px]">
                <h2 className="flex">{name}</h2>
                <p className="bg-gradient-to-br to-purple-500 from-blue-700 rounded py-px px-[5px] bg-opacity-40">{`+ ${value}%`}</p>
            </div>
            <label className={styles.switch}>
                <input type="checkbox" checked={isChecked} onChange={handleToggle} value={value}/>
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default ToggleSwitch;