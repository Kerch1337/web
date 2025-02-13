import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
    return <div className={styles.container}>
        <div>
            <h1 className={styles.head}>ARMAGEDDON V</h1>
            <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        <div className={styles.links}>
            <Link to={"/asteroids"} className={styles.links} >Астероиды</Link>
            <Link to={"/destroyment"} className={styles.links} >Уничтожение</Link>
        </div>
    </div>
    
}