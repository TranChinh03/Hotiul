import styles from './statisticBox.module.scss'

export const StatisticBox = (props) => {
    return (
        <div style={{ backgroundColor: props.backgroundColor}} className={styles.container}>
            <div className={styles.text}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.figure}>{props.figure}</p>
                <p className={styles.unit}>{props.unit}</p>
            </div>
            <div className={styles.icon}>
                <div style={{ flex: 0.5}}/>
                <img style={{ flex: 0.5, margin: '10px'}} src={props.icon}/>
            </div>
        </div>
    )
}