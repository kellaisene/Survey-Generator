import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './../../styles/multipleChoice.css';
import NewSurvey from './../NewSurvey';

class MultipleChoice extends Component{
    render() {
        return (
            <div className="multipleChoicePage">
                <section className="topSection">
                   <p> Multiple Choice </p>
                   {/* <Route path="/" component={NewSurvey}/>
                   <Link to="/">
                    <div>Click Here!</div>
                    </Link> */}
                </section>
            </div>
        )
    }
}

export default MultipleChoice;