import React from 'react'
import './home.css'
import Banner from './banner'
import Card from './card'

import img from '../src/images/room2.jpg'
import imgs from '../src/images/room3.jpg'
import imge from '../src/images/room1.jpg'

import imgy from '../src/images/out2.jpg'
import imgg from '../src/images/out1.jpg'
import imgj from '../src/images/out3.jpg'

function home() {
    return (
        <div className='home'>
            <Banner/>
            <div className='home_section'>
                <Card 
                    src={img}
                    title='Unique stay'
                    description='Specious, private with 
                    historical touch' />
                <Card
                    src={imgs}
                    title='Lifetime expercience'
                    description='Comfortable, private place
                    suitable for family or friends' />
                <Card 
                    src={imge}
                    title='Better for you'
                    description='Comfortable, made perfect
                    for couple and very private'/>
            </div>
            <div className='home_section'>
                <Card
                src={imgy}
                title='Studio Arpartment'
                description='R895/night' />
                <Card
                    src={imgg}
                    title='Luxury Penthouse'
                    description='R2599/night' />
                <Card 
                    src={imgj}
                    title='Luxury Penthouse'
                    description='R1895/night'/>
            </div>
        </div>
    )
}

export default home
