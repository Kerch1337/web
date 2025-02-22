import styles from "./AsteroidCard.module.css";
import Dino from "./dino.svg";
import Aster from "./aster.svg";

export const AsteroidCard = (props) => {
   
     const {name, date, distance, size,  isDangerous, distanceMode} = props;
   
    return <div>

        <div className={isDangerous ? styles.card2: styles.card1}>
            <img src={Dino} alt="Динозавр" className={styles.dinosaur}/>
            <img src={Aster} alt="Астероид" className={styles.asteroid}/>
            <CardContent name = {name} date={date} distance={distance} size={size} distanceMode={distanceMode}/>
            <CardAction isDangerous={isDangerous} />
        </div>
    </div>
}

const CardContent = (props) => {

    const {name, date, distance, size} = props;
    const distanceMode = props.distanceMode;
    return<div>
               <div className={styles.name}>{name}</div>
               <div className={styles.info}>
                   <div className={styles.text}>{'Дата: ' + date}</div>
            <div className={styles.text}>{'Расстояние: ' + (distanceMode ? (distance.lunar / 1).toFixed(2) + ' раз до луны' : (distance.kilometers / 1).toFixed(2) + ' км')}</div>
                   <div className={styles.text}>{'Размер: '+ size +' м'}</div>
               </div>
         </div>
}

const CardAction = ({isDangerous}) => {
    return <div>
               <div className={styles.danger}>{'Оценка: ' + (isDangerous ? 'опасен': 'не опасен')}</div>
               <button className={styles.buttons}>На уничтожение</button>
           </div>
}