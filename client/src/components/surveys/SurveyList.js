import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {

  componentDidMount(){
    this.props.fetchSurveys();
  }
  renderSurveys(){
    return this.props.surveys.reverse().map(survey => {
      return(
        <div class="card darken-1 blue-grey" key={survey._id}>
          <div class="card-content white-text">
            <span class="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div class="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      )
    });
  }

  render(){
    return(
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({surveys}){
  return { surveys }
}
export default connect(mapStateToProps, {fetchSurveys} )(SurveyList);
