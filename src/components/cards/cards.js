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
                                  src='https://unsplash.com/photos/P_Ne56WEe5s/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8aXJhbnxlbnwwfHx8fDE2NTk0NDI5Mzc&force=true&w=640'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  label='Cultural'
                        />
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='https://unsplash.com/photos/jwjGCvxjDlo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTd8fGlyYW58ZW58MHx8fHwxNjU5NDQyOTM3&force=true&w=640'
                                  label='Cultural'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='https://unsplash.com/photos/xLTbaVPHs3Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTJ8fGlyYW58ZW58MHx8fHwxNjU5NDQyOTM3&force=true&w=640'
                                  label='Historical'
                        />
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='https://unsplash.com/photos/gtWi4FjSfhk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTA3fHxpcmFufGVufDB8fHx8MTY1OTQ0MzQwNQ&force=true&w=640'
                                  label='Nature'
                        />
                        <CardItem path='/'
                                  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                  src='https://unsplash.com/photos/OxEsesdSVsE/download?force=true&w=640'
                                  label='Nature'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;