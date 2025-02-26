import Dino from './dino.svg'
import Aster from './aster.svg'
import styles from './AsteroidCard.module.css'
import {AsteroidCardContentContainer} from './AsteroidCardContentContainer'
import { useContext } from 'react'
import { AsteroidsContext } from '../asteroids-context/AsteroidsContext'

type AsteroidCardProps = {
    name: string
    date: string
    distance: {
        kilometers: number
        lunar: number
    }
    size: number
    isDangerous: boolean
}

type CardContentProps = {
    name: string
    date: string
    distance: {
        kilometers: number
        lunar: number
    }
    size: number
    distanceMode: boolean
}

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, distance, size, isDangerous } = props
    const {addAsteroid, deleteAsteroid, destroyment} = useContext(AsteroidsContext)
    const isSelected = (asteroid) =>{
        return destroyment.some(item=>item.id === asteroid.id)
    }

    return (
        <div>
            <div className={isDangerous ? styles.card2 : styles.card1}>
                <img src={Dino} alt="Динозавр" className={styles.dinosaur} />
                <img src={Aster} alt="Астероид" className={styles.asteroid} />
                <AsteroidCardContentContainer
                    name={name}
                    date={date}
                    distance={distance}
                    size={size}
                />
                <CardAction isDangerous={isDangerous} is={isSelected(props)} onClick={isSelected(props)?()=>deleteAsteroid(props):()=>addAsteroid(props)}/>
            </div>
        </div>
    )
}

export const CardContent = (props: CardContentProps) => {
    const { name, date, distance, size, distanceMode } = props
    

    return (
        <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.info}>
                <div className={styles.text}>{'Дата: ' + date}</div>
                <div className={styles.text}>
                    {'Расстояние: ' +
                        (distanceMode
                            ? (distance.lunar / 1).toFixed(2) + ' раз до луны'
                            : (distance.kilometers / 1).toFixed(2) + ' км')}
                </div>
                <div className={styles.text}>
                    {'Размер: ' + size.toFixed(2) + ' м'}
                </div>
            </div>
        </div>
    )
}

const CardAction = (props: {isDangerous: boolean, is: boolean, onClick: (asteroid: any)=>void}) => {
    const { isDangerous,is, onClick } = props
    

    return (
        <div>
            <div className={styles.danger}>
                {'Оценка: ' + (isDangerous ? 'опасен' : 'не опасен')}
            </div>
            <button className={is?styles.buttons2:styles.buttons} onClick={onClick}>{(is ? 'Уже на уничтожении' : 'На уничтожение')}</button>
        </div>
    )
}
