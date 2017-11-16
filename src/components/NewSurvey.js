import React, {Component} from 'react';
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
                <input className="inputBox"></input>
            </section>
            <section className="questionType">
            
            </section>

            <section className="addQuestion">
                <div className="questionContainer">
                <div className="prompt">
                    + Add Question
                </div>
                <div className="buttonContainer">
                    <button className="doneButton">Multiple Choice</button>
                    <button className="doneButton">Yes/No True/False</button>
                    <button className="doneButton">Fill in the Blank</button>
                    <button className="doneButton">Scale</button>
                </div>
                </div>

            </section>
            <button className="doneButton">DONE</button>
            </div>
        )
    }
}

export default NewSurvey;