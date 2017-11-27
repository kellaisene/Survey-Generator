import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './../../styles/multipleChoice.css';
import NewSurvey from './../NewSurvey';

<script src="https://surveyjs.azureedge.net/0.96.3/survey.react.min.js"></script>
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

// Survey.Survey.cssType = "bootstrap";
// Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

// var json =  { questions: [
//      {name:"name", type:"text", title: "Please enter your name:", placeHolder:"Jon Snow", isRequired: true},
//      {name:"birthdate", type:"text", inputType:"date", title: "Your birthdate:", isRequired: true},
//      {name:"color", type:"text", inputType:"color", title: "Your favorite color:"},
//      {name:"email", type:"text", inputType:"email", title: "Your e-mail:", placeHolder:"jon.snow@nightwatch.org", isRequired: true, validators: [{type:"email"}]}
// ]};

// window.survey = new Survey.Model(json);


// survey.onComplete.add(function(result) {
//     document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
// });


// ReactDOM.render(<Survey.Survey model ={ survey}  />, document.getElementById("surveyElement"));

