import React from 'react'
import './pages.css'

import About from '../components/about'

function Aboutpage (props){
    return(
        <About  title={props.title}/>
    );
}

export default Aboutpage;