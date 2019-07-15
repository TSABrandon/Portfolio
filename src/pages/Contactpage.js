import React from 'react'
import './pages.css'

import Contact from '../components/contact'

function Contactpage (props){
    return(
       <Contact title={props.title} />
    );
}

export default Contactpage;