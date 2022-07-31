import React from 'react';
import './cards.css'
import CardItem from "./CardItem";

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Featured places</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem path='/'
                                  src='images/1.jpg'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  label='Cultural'
                        />
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='images/2.jpg'
                                  label='Cultural'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='images/3.jpg'
                                  label='Historical'
                        />
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='images/4.jpg'
                                  label='Nature'
                        />
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='images/5.jpg'
                                  label='Nature'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;