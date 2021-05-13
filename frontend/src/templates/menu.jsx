import React from 'react'

const Menu = props => {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container'>
                <div className="navbar-header">
                    <a href="#home" className="navbar-brand">
                        <i className="fa fa-calendar-check-o"></i> TodoApp
                    </a>
                </div>
                <div id='navbar' className="collapse navbar-collapse">
                    <ul className="navbar-nav nav">
                        <li className='nav-item'><a className='nav-link' href="#/todos">Tarefas</a></li>
                        <li className='nav-item'><a className='nav-link' href="#/about">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Menu;