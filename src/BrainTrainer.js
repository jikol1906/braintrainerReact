import React, {Component} from 'react';
import NavBar from "./Component/NavBar/NavBar";
import {GameSection} from "./Container/GameSection";
import {Route, Switch} from "react-router-dom";


class BrainTrainer extends Component {

    render() {

        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={GameSection}/>
                    <Route path="/braintrainer" component={GameSection}/>
                </Switch>
            </div>
        )
    }

}

export default BrainTrainer;
