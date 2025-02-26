import {CardContent} from './AsteroidCard'
import { AsteroidsContext } from '../asteroids-context/AsteroidsContext'
import {useContext} from 'react'

export const AsteroidCardContentContainer = (props)=>{
    const {distanceMode} = useContext(AsteroidsContext)

    return <CardContent {...props} distanceMode={distanceMode}/>
}