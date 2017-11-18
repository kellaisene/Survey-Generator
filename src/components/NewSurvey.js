import React, {Component} from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import MuiltipleChoice from './questionCategory/MultipleChoice';
import './../styles/newSurvey.css';


class NewSurvey extends Component{
    render() {
        return (
            <div className="newSurvey">
            <header className="nsheaderContainer">
                <div className="nsheader">NEW SURVEY</div>
            </header>
            
            <section className="surveyTitle">
                <div className="title">Title</div>
                <input className="inputBox" placeholder="Type Title Here"></input>
            </section>
            <section className="questionType">
            
            </section>
            <HashRouter>
            <section className="addQuestion">
                <div className="questionContainer">
                <Route path="/multipleChoice" component={MuiltipleChoice}/>
                
                <div className="prompt">
                    + Add Question
                </div>
                
                <div className="buttonContainer">
                   <Link to="/multipleChoice"> 
                   <div className="doneButton">Multiple Choice</div>
                   </Link>
                   <Link to="/trueFalse"> 
                    <div className="doneButton">Yes/No True/False</div>
                    </Link>
                   <Link to="/fillInBlank"> 
                    <div className="doneButton">Fill in the Blank</div>
                    </Link>
                   <Link to="/scale"> 
                    <div className="doneButton">Scale</div>
                    </Link>
                </div>
                
                </div>

            </section>
            </HashRouter>
            <section className="bottomSection">
            <div className="doneButton">DONE</div>
            </section>
            
            </div>
        )
    }
}

export default NewSurvey;