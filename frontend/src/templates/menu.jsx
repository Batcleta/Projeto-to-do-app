import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container'>
                <div className="navbar-header">
                    <a href="/home" className="navbar-brand">
                        <i className="fa fa-calendar-check-o"></i> TodoApp
                    </a>
                </div>
                <div id='navbar' className="collapse navbar-collapse">
                    <ul className="navbar-nav nav">
                        <li className='nav-item'><Link className='nav-link' to="/todos">Tarefas</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/about">Sobre</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Menu;