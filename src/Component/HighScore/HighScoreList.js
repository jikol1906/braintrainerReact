import React, {Component} from 'react';
import './HighScoreList.scss'

class HighScoreList extends Component {



    render() {


        return (
            <React.Fragment>
                <ul className="highscores">
                    {this.props.scores.map(({name, scores}, i) => {
                        return (
                            <li key={i}>
                                <span className="number">{i}</span>
                                <span className="points">{scores}</span>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        );
    }


}

export default HighScoreList;