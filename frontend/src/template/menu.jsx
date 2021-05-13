import React from 'react'

const Menu = props => {
    return (
        <nav className='navbar navbar-inverse bg-inverse'>
            <div className='container'>
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">
                        <i className="fa fa-calendar-check-o"></i>TodoApp
                    </a>
                </div>
                <div id='navbar' className="navbar-collapse collapse">
                    <ul className="navbar-nav nav">
                        <li><a href="#/todos">Tarefas</a></li>
                        <li><a href="#/about">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Menu;