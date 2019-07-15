import React from 'react'
import './pages.css'
import Hero from '../components/Hero'

function Homepage (props){
    return(
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
    );
}

export default Homepage;