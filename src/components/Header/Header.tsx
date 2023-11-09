import styles from "./Header.module.scss"
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const isAuth = useSelector((state: RootState)=> state.auth.isAuthenticated)
    const username = "Sillect"
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <nav>
                <h1>BOOST<p>.GG</p></h1>
                <ul>
                    <li>Бустинг</li>
                    <li></li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                </ul>
                {!isAuth ? <button onClick={()=> navigate("/profile")}><img src="src/assets/icons/profile2.svg" className="flex w-[15px] h-[15px] bg-transparent invert" alt="profile"/>{username}</button> : <button>Войти</button> }
            </nav>
        </div>
    );
};

export default Header;