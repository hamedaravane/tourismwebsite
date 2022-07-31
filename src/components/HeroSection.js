import React from 'react';
import './HeroSection.css'
import Button from "./Button";

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <img src={require('../assets/steven-su-AxhfHp6fJ2M-unsplash.jpg')}/>
            <div className='hero-buttons'>
                <input className='search-input' type='text' placeholder='Type City...' autoComplete={false}/>
                <Button to='/' buttonStyle={'btn--search'} buttonSize={'btn--medium'}>
                    Serach
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;