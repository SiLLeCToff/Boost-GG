import styles from "./Employees.module.scss";

const Employees = () => {
  const users = [
    {
      id: 1,
      name: "Ruslan",
      role: "ADMIN",
      registration: "25.02.2023",
      commission: "none",
      status: "Online",
    },
    {
      id: 2,
      name: "Max",
      role: "Сотрудник",
      registration: "29.03.2023",
      commission: "20%",
      status: "Online",
    },
    {
      id: 3,
      name: "Edward",
      role: "Сотрудник",
      registration: "01.08.2023",
      commission: "15%",
      status: "Offline",
    },
  ];

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.filter}>
          <ul>
            <li>Name<img src="/src/assets/icons/chevron-down.svg" className="flex w-[15px] opacity-50" alt="icon"/></li>
            <li>Role<img src="/src/assets/icons/chevron-down.svg" className="flex w-[15px] opacity-50" alt="icon"/></li>
            <li>Registered<img src="/src/assets/icons/chevron-down.svg" className="flex w-[15px] opacity-50" alt="icon"/></li>
            <li>Commission<img src="/src/assets/icons/chevron-down.svg" className="flex w-[15px] opacity-50" alt="icon"/></li>
            <li>Status<img src="/src/assets/icons/chevron-down.svg" className="flex w-[15px] opacity-50" alt="icon"/></li>
            <li>Actions</li>
          </ul>
        </div>
        <div className={styles.list}>
          {users.map((item) => (
              <div key={item.id} className={styles.user}><p>{item.name}</p><p>{item.role}</p><p>{item.registration}</p><p>{item.commission}</p><p>{item.status}</p>
              <div className="flex w-[20%] justify-center gap-[20%]">
                <img src="/src/assets/icons/pencil.svg" className="flex w-[20px] opacity-60 hover:opacity-20" alt="edit"/>
                <img src="/src/assets/icons/user-minus.svg" className="flex w-[20px] opacity-60 hover:opacity-20" alt="edit"/>
              </div>
              </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Employees;
