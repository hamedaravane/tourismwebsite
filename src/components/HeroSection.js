import React from 'react';
import './HeroSection.css'
import Button from "./Button";

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <img src={'https://unsplash.com/photos/T7N5U9kpNIk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8aXJhbnxlbnwwfHx8fDE2NTk0NDI5Mzc&force=true&w=1920'}/>
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