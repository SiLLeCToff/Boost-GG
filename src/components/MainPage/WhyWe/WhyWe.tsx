import styles from './WhyWe.module.scss'

const WhyWe = () => {

    const list = [
        {id: 1, name: "Профессиональных Игроков", text: "Наши сотрудники - опытные игроки, готовые взять на себя трудности повышения вашего ранга, обеспечивая быстрый и безопасный опыт."},
        {id: 2, name: "Безопасность и Конфиденциальность", text: "Ваш аккаунт находится в надежных руках. Мы ценим вашу конфиденциальность и гарантируем безопасность ваших данных."},
        {id: 3, name: "Гибкий Подход:", text: "Независимо от того, нужен ли вам полный буст или подъем на несколько рангов - мы предоставляем гибкие варианты, чтобы удовлетворить ваши потребности."},
        {id: 4, name: "Постоянная Поддержка", text: "Наша команда готова ответить на ваши вопросы и обеспечить вас информацией о ходе поднятия вашего ранга."},

    ]
    return (
        <div className={styles.main}>
            <h1 >Почему&nbsp;<p>BOOST</p>.<span>GG</span>&nbsp;?</h1>
            <h2>Мы предлагаем:</h2>

            <div className="flex flex-wrap gap-[50px] mt-[50px] items-center justify-center">
                {list.map((item) => (
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h3 >{item.name}<p>{item.text}</p></h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyWe;