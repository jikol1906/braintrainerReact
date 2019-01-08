import React, {Component} from 'react';
import NavBar from "./Component/NavBar/NavBar";
import {GameSection} from "./Container/GameSection";
import {Route, Switch} from "react-router-dom";
import Menu from "./Component/Menu/Menu";


class BrainTrainer extends Component {

    render() {

        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Menu}/>
                    <Route path="/braintrainer" component={GameSection}/>
                </Switch>
            </div>
        )
    }

}

export default BrainTrainer;
