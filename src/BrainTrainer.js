import React, {Component} from 'react';
import NavBar from "./Component/NavBar/NavBar";
import {Route, Switch, withRouter} from "react-router-dom";
import Menu from "./Component/Menu/Menu";
import {connect} from 'react-redux';
import Overlay from "./Layout/Overlay";
import asyncComponent from "./hoc/asyncComponent";

const asyncGameSection = asyncComponent(() => import("./Container/GameSection"));

class BrainTrainer extends Component {


    difficultySelected = (difficulty) => {
        this.props.onDifficultySelected(difficulty);
        this.props.history.push('/braintrainer')
    };


    render() {


        const routes = [
            {
                path:'/',
                component:Menu,
                componentProps:{
                    diffSelected:this.difficultySelected
                }
            },
            {
                path:'/braintrainer',
                component:asyncGameSection
            }
        ];

        return (
            <div>
                <NavBar/>
                <Switch>
                    {routes.map(({path,component:C,componentProps}) => (
                        <Route
                            exact
                            key={path}
                            path={path}
                            render={(props) => <C {...props} {...componentProps}/>}
                        />
                    ))}
                </Switch>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    onDifficultySelected : (difficulty) => dispatch({difficulty,type:'SET_DIFFICULTY'})
});

export default withRouter(connect(null,mapDispatchToProps)(BrainTrainer));
