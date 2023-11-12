import styles from './SpanHeader.module.scss'

const SpanHeader = () => {
    return (
        <div className={`${styles.card}`}>
            <div className={styles.border}></div>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <div className={styles.logo1}>
                        <h1 className="text-[50px]">VALORANT</h1>
                    </div>
                    <div className={styles.logo2}>
                        <h1 className="text-[50px]">Boosting Service</h1>
                    </div>
                    <span className={styles.trail}></span>
                </div>
            </div>
        </div>
    );
};

export default SpanHeader;