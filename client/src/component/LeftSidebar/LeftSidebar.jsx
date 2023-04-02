import React from "react";
import './LeftSidebar.css';
import {NavLink} from 'react-router-dom';
import Globe  from '../../assets/globe.png'

const LeftSidebar = () => {
    return(
        <div className="left-sidebar">
            <div className="side-nav">
                <NavLink to='/' className='side-nav-links' activeclassname='active' >
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>Public</p></div>
                    <NavLink to='/Questions' className='side-nav-links'>
                        <img src={Globe} width='30px' alt="Globe" />
                        <p style={{padding:'10px'}}>Questions</p>
                        </NavLink>   
                       <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{padding:'10px'}}>
                        <p>Tags</p>
                       </NavLink>
                       <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{padding:'10px'}}>
                        <p>Users</p>
                       </NavLink>
                     </div>
            </div>

        </div>
    )
}
export default LeftSidebar