import { Header } from '../components/header/Header'
import styles from './Destroyment.module.css'
import ImageDestroyment from './destroyment.jpg'

export const Destroyment = () => {
    return (
        <div>
            <Header />
            <div className={styles.head}> Destroyment page</div>
            <div className={styles.container}>
                <img src={ImageDestroyment} alt="�����������" />
            </div>
        </div>
    )
}
