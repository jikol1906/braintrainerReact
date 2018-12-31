import React, {Component} from 'react';
import Board from "./Container/Board";
import NavBar from "./Component/NavBar/NavBar";
import {GameSection} from "./Container/GameSection";




class BrainTrainer extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <GameSection/>
            </div>
        )
    }
}

export default BrainTrainer;
