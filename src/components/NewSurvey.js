import React, {Component} from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import MuiltipleChoice from './questionCategory/MultipleChoice';
import YesNo_TrueFalse from './questionCategory/YesNo_TrueFalse';
import FillInTheBlank from './questionCategory/FillInTheBlank';
import Scale from './questionCategory/Scale';
import './../styles/newSurvey.css';


class NewSurvey extends Component{
    constructor() {
        super();

        this.state = {
            title: "",
            multipleChoice: true,
            trueFalse: true,
            fillInBlank: true,
            scale: true
        }

        this.multipleChoiceChange=this.multipleChoiceChange.bind(this);
        this.trueFalseChange=this.trueFalseChange.bind(this);
        this.fillInBlankChange=this.fillInBlankChange.bind(this);
        this.scaleChange=this.scaleChange.bind(this);
       
    }

    onTitleChanged(newTitle) {
        this.setState({
            title: newTitle
        })
    }

    multipleChoiceChange(){
        this.setState({
            multipleChoice: false
        })
    }
    trueFalseChange(){
        this.setState({
            trueFalse: false
        })
    }
    fillInBlankChange(){
        this.setState({
            fillInBlank: false
        })
    }
    scaleChange(){
        this.setState({
            scale: false
        })
    }
    render() {
        let multipleStyle = {
            display: this.state.multipleChoice ? 'inline-block' : 'none'
        }

        let trueFalseStyle = {
            display: this.state.trueFalse ? 'inline-block' : 'none'
        }

        let fillInStyle = {
            display: this.state.fillInBlank ? 'inline-block' : 'none'
        }

        let scaleStyle = {
            display: this.state.scale ? 'inline-block' : 'none'
        }
        
        return (
            <div className="newSurvey">
            <header className="nsheaderContainer">
                <div className="nsheader">NEW SURVEY</div>  
            </header>
            
            <section className="surveyTitle">
                <div className="title">Title</div>
                <input className="inputBox" placeholder="Type Title Here"
                onChange={(e) => this.onTitleChanged(e.target.value)}></input>
            </section>
            <section className="questionType">
            
            </section>
            <HashRouter>
            <section className="addQuestion">
                <div className="questionContainer">
                {/* <Route path="/" component={NewSurvey}/> */}
                <Route path="/multipleChoice" component={MuiltipleChoice}/>
                <Route path="/trueFalse" component={YesNo_TrueFalse}/>
                <Route path="/fillInBlank" component={FillInTheBlank}/>
                <Route path="/scale" component={Scale}/>
                
                
                <div className="prompt">
                    {/* + Add Question */}
                </div>
                
                <div className="buttonContainer">
                   <Link to="/multipleChoice"> 
                   <div onClick={this.multipleChoiceChange} style={multipleStyle} className="button">Multiple Choice</div>
                   </Link>
                   <Link to="/trueFalse"> 
                    <div onClick={this.multipleChoiceChange} style={multipleStyle} className="button">Yes/No True/False</div>
                    </Link>
                   <Link to="/fillInBlank"> 
                    <div onClick={this.multipleChoiceChange} style={multipleStyle} className="button">Fill in the Blank</div>
                    </Link>
                   <Link to="/scale"> 
                    <div onClick={this.multipleChoiceChange} style={multipleStyle} className="button">Scale</div>
                    </Link>
                </div>
                
                </div>

            </section>
            </HashRouter>
            {/* <HashRouter> */}
            <section className="bottomSection">
                {/* <Link to="/"> */}
            <div className="doneButton">DONE</div>
            {/* </Link> */}
            </section>
            {/* </HashRouter> */}
            
            </div>
        )
    }
}

export default NewSurvey;