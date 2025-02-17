import { Header } from "../components/header/Header"
import styles from "./Asteroids.module.css";
import { useState } from "react";
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";


export const Asteroids = () => {
    console.log("Parent component rendered")

    const [asteroids] = useState(generateAsteroids())
    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [distanceMode, setDistanceMode] = useState(false);
   

    return <div>
        <Header />
        <div className={styles.checkbox} ><input type="checkbox"
        name="a" value={onlyDangerous} onChange={()=>setOnlyDangerous(!onlyDangerous)}/> Показать только опасные</div>
        <div className={styles.distancemode}>
            Расстояние <button className={distanceMode ? styles.buttons :styles.buttonsSelected} onClick={()=>setDistanceMode(false)}>в километрах</button>,
            <button className={distanceMode ? styles.buttonsSelected :styles.buttons} onClick={()=>setDistanceMode(true)}>в дистанциях до луны</button>
        </div>
        <div className={styles.container}>
        {console.log("1111" +asteroids.distanceMode)}
            { onlyDangerous ?
                asteroids.filter((item)=>item.isDangerous).map((item)=><AsteroidCard {...item} distanceMode={distanceMode}/>) :
                asteroids.map((item)=><AsteroidCard {...item} distanceMode={distanceMode}/>)
            }
        </div>
    </div>
}

const getRandomWord = (characters, minLength, maxLength) =>{
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const generateAsteroids = () => {
    const months = [
        'января', 'февраля', 'марта', 'апреля',
        'мая', 'июня', 'июля', 'августа',
        'сентября', 'октября', 'ноября', 'декабря',];

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = [];

    for(let i = 0; i < 10; i++){
        const name = getRandomWord(characters, 5, 15);
        const date = '' + (Math.random()*27 + 1).toFixed(0) + ' '+ months[(Math.random()*11).toFixed(0)] + ' 2023';
        const size = (Math.random()*100 + 10).toFixed(0);
        const distance = (Math.random()*900000000).toFixed(0);
        const isDangerous = Math.random() >= 0.5
        result.push({name, date, size, distance, isDangerous});
    }
    return result;
}