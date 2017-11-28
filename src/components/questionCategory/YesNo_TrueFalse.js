import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../../styles/yesNo_trueFalse.css';
import NewSurvey from './../NewSurvey';

class YesNo_TrueFalse extends Component{
    render() {
        return (
            <div className="yesNoPage">
                <section className="topSection">
                    <p> Yes/No True/False </p>
                </section>
            </div>
        )
    }
}

export default YesNo_TrueFalse;