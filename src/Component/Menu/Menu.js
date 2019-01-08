import React from 'react';
import './Menu.scss'
import Button from "../../UI/Button/Button";

const Menu = props => {
    return (
        <div className="menu">
            <h2>Choose Difficulty</h2>
            <Button>Easy</Button>
            <Button>Medium</Button>
            <Button>Hard</Button>

        </div>
    );
};

export default Menu;
