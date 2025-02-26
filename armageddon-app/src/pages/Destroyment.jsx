import { Header } from '../components/header/Header'
import styles from './Destroyment.module.css'
import ImageDestroyment from './destroyment.jpg'
import { useContext } from 'react'
import { AsteroidCard } from '../components/AsteroidCard/AsteroidCard'
import { AsteroidsContext } from '../components/asteroids-context/AsteroidsContext'

export const Destroyment = () => {

    const {destroyment} = useContext(AsteroidsContext)

    console.log(destroyment)

    return (
        <div>
            <Header />
            <div className={styles.container}>
                {destroyment.map(item=><AsteroidCard key={item.id} {...item}/>)}
            </div>
        </div>
    )
}
