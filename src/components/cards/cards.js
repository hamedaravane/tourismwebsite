import React from 'react';
import './cards.css'
import CardItem from "./CardItem";

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Featured places</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='images/1.jpg'
                                  label='Luxury'
                        />
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='images/2.jpg'
                                  label='Great'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='images/1.jpg'
                                  label='Luxury'
                        />
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='images/2.jpg'
                                  label='Great'
                        />
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='images/2.jpg'
                                  label='Great'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;