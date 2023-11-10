import React, {ChangeEvent, useState} from 'react';
import styles from "./SelectMenu.module.scss"
interface option  {
    label: string,
    value: string,
}

interface selectMenuProps  {
    options: option[],
    onSelect: (value: string) => void,
    className?: string,
}
const SelectMenu: React.FC<selectMenuProps> = ({ options, onSelect, className }) => {
    const [selectedOption, setSelectedOption] = useState(options.length > 0 ? options[0].value : '');

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        onSelect(value);
    };

    return (
        <select value={selectedOption} onChange={handleSelectChange} className={`${styles.selectMenu} ${className}`}>
            {/*<option value='' disabled></option>*/}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectMenu;