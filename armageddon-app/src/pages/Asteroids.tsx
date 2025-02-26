import { Header } from '../components/header/Header'
import styles from './Asteroids.module.css'
import { useEffect, useState, useContext } from 'react'
import { AsteroidCard } from '../components/AsteroidCard/AsteroidCard'
import { AsteroidsContext } from '../components/asteroids-context/AsteroidsContext'

export const Asteroids = () => {
    const [asteroids, setAsteroids] = useState<
        {
            name: string
            date: string
            size: number
            distance: {
                kilometers: number
                lunar: number
            }
            isDangerous: boolean
            id: string
        }[]
    >([])

    useEffect(() => {
        try {
            const result = fetch(
                'https://api.nasa.gov/neo/rest/v1/feed?api_key=' +
                    process.env.REACT_APP_API_NASA
            )
                .then((res) => {
                    return res.json()
                })
                .then((response) => {
                    let rawAsteroids = []
                    for (const data in response.near_earth_objects) {
                        rawAsteroids = rawAsteroids.concat(
                            response.near_earth_objects[data]
                        )
                    }
                    const asteroids = rawAsteroids.map((item) => {
                        const size =
                            (item.estimated_diameter.meters
                                .estimated_diameter_max +
                                item.estimated_diameter.meters
                                    .estimated_diameter_min) /
                            2
                        const close = item.close_approach_data[0]

                        return {
                            name: item.name,
                            date: close.close_approach_date,
                            size,
                            distance: {
                                kilometers: close.miss_distance.kilometers,
                                lunar: close.miss_distance.lunar,
                            },
                            isDangerous: item.is_potentially_hazardous_asteroid,
                            id: item.id,
                        }
                    })
                    setAsteroids(asteroids)
                })
        } catch (err) {
            console.log(err)
            setAsteroids(generateAsteroids())
        }
    }, [])

    const {onlyDangerous, setOnlyDangerous,distanceMode, setDistanceMode} = useContext(AsteroidsContext)

    return (
        <div>
            <Header />
            <div className={styles.checkbox}>
                <input
                    type="checkbox"
                    name="a"
                    value={onlyDangerous as unknown as string}
                    onChange={() => setOnlyDangerous(!onlyDangerous)}
                />{' '}
                Показать только опасные
            </div>
            <div className={styles.distancemode}>
                Расстояние{' '}
                <button
                    className={
                        distanceMode ? styles.buttons : styles.buttonsSelected
                    }
                    onClick={() => setDistanceMode(false)}
                >
                    в километрах
                </button>
                ,
                <button
                    className={
                        distanceMode ? styles.buttonsSelected : styles.buttons
                    }
                    onClick={() => setDistanceMode(true)}
                >
                    в дистанциях до луны
                </button>
            </div>

            <div className={styles.container}>
                {onlyDangerous
                    ? asteroids
                          .filter((item) => item.isDangerous)
                          .map((item) => (
                              <AsteroidCard
                                  key={item.id}
                                  {...item}
                                 
                              />
                          ))
                    : asteroids.map((item) => (
                          <AsteroidCard
                              key={item.id}
                              {...item}
                              
                          />
                      ))}
            </div>
        </div>
    )
}

const getRandomWord = (characters, minLength, maxLength) => {
    const length =
        Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength
    let result = ''
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return result
}

const generateAsteroids = () => {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ]

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const result = []

    for (let i = 0; i < 10; i++) {
        const name = getRandomWord(characters, 5, 15)
        const date =
            '' +
            (Math.random() * 27 + 1).toFixed(0) +
            ' ' +
            months[(Math.random() * 11).toFixed(0)] +
            ' 2023'
        const size = (Math.random() * 100 + 10).toFixed(0)
        const distance = (Math.random() * 900000000).toFixed(0)
        const isDangerous = Math.random() >= 0.5
        result.push({ name, date, size, distance, isDangerous, id: name })
    }
    return result
}
