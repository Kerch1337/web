import { Header } from "../components/header/Header"
import styles from "./Asteroids.module.css";
import ImageAsteroids from "./asteroids.webp";

export const Asteroids = ()=> {
    return <div>
        <Header />
        <div className={styles.head}> Asteroids page</div>
        <div className={styles.container}>
            <img src={ImageAsteroids} alt="Астероиды" />
        </div>
    </div>
}