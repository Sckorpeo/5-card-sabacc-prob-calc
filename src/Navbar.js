import React, { Component } from 'react';
import './Navbar.css';
import { NavHashLink as Link } from 'react-router-hash-link';


class Navbar extends Component {


    render() {
        return (
            <div>


                <nav className='Navbar-top'>
                    <a className='Navbar-btn'
                        href='/Probability-calculator'>
                        <div className='Navbar-btn-div'>Probability Calculator</div>
                    </a>
                </nav>


                <nav className='Navbar-bottom'>

                    <Link to='/#intro'
                        className='fas fa-circle fa-2x intro'
                    // activeClassName='fas fa-dot-circle' 
                    />
                    <Link to='/#goal'
                        className='fas fa-circle fa-2x goal'
                    // activeClassName='fas fa-dot-circle' 
                    />
                    <Link to='/#rules'
                        className='fas fa-circle fa-2x rules'
                    // activeClassName='fas fa-dot-circle' 
                    />

                </nav>
            </div>
        );
    }
}

export default Navbar;