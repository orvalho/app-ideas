import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class IdeaForm extends Component {
  renderInput = ({input, meta, label}) => {
    const className = `field ${meta.touched && meta.error
      ? 'error'
      : ''}`;
    const title = <input {...input} autoComplete="off"/>;
    const description = <textarea {...input}/>;
    let element = '';

    switch (input.name) {
      case 'title':
        element = title;
        break;
      case 'description':
        element = description;
        break;
      default:
        element = '';
    }

    return (<div className={className}>
      <label>{label}</label>
      {element}
      {this.renderError(meta)}
    </div>);
  };

  renderError = ({touched, error}) => {
    if (touched && error) {
      return (<div className="ui error message">
        <div className="header">{error}</div>
      </div>);
    }
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (<div>
      <h1>{this.props.title}</h1>
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="ui primary button" type="submit">Submit</button>
      </form>
    </div>);
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({form: 'IdeaForm', validate})(IdeaForm);
