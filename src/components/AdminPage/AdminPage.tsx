import styles from "./AdminPage.module.scss";
import { JSX, useState } from "react";
import Dashboard from "./Dashboard/Dashboard.tsx";
import Employees from "./Employees/Employees.tsx";
import Notifications from "./Notifications/Notifications.tsx";
import Chat from "./Chat/Chat.tsx";
import Settings from "./Settings/Settings.tsx";
const AdminPage = () => {
  /////////////////////////DEV-TOOLS START//////////////////////////
  const [edit, setEdit] = useState(false);
  /////////////////////////DEV-TOOLS END//////////////////////////

  const name = "Ruslan";
  const menuList = [
    { id: 1, name: "Dashboard", icon: "chart.svg", component: <Dashboard name={name} />},
    { id: 2, name: "Сотрудники", icon: "users.svg", component: <Employees />},
    { id: 3, name: "Уведомления", icon: "bell.svg", component: <Notifications />},
    { id: 4, name: "чат", icon: "chat.svg", component: <Chat />},
    { id: 5, name: "Настройки", icon: "gear.svg", component: <Settings />},
  ];

  const [selectedNav, setSelectedNav] = useState({id: 1, component: <Dashboard name={name} />,});

  const handleSelectNav = (id: number, component: JSX.Element) => {
    setSelectedNav((prev) => ({
      ...prev,
      id: id, component: component,
    }));
  };

  return (
    <div className={`${styles.container} ${edit && `${styles.ros}`}`}>
      <button onClick={() => setEdit(!edit)} className="absolute bg-red-400 z-50">Edit</button>
      <nav><h1><p>BOOST</p>.GG</h1>
        <ul>
          {menuList.map((item) => (
            <li key={item.id} onClick={() => handleSelectNav(item.id, item.component)} className={`${selectedNav.id === item.id ? `${styles.currentLi} ${styles.moveDown}` : ""}`}>
              <img src={`/src/assets/icons/${item.icon}`} alt="icon" />{item.name}
            </li>
          ))}
        </ul>
        <div className={styles.shadow} />
      </nav>
      <main>
        <header>
          <div className={styles.profile}><img src="/src/assets/icons/chevron-down.svg" className="flex opacity-40" alt="icon"/>
            <p>{name}</p>
            <img src="https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon.png" className="rounded-full w-[45px] h-[45px]" alt="avatar"/>
          </div>
        </header>
        {selectedNav.component}
      </main>
    </div>
  );
};

export default AdminPage;
