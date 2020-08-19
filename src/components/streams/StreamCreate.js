import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
	renderError({ error, touched }) {
		if (error && touched) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}
	renderInput = ({ input, label, meta }) => {
		//distract the input from formProps or you can just pass formProps and use it
		// can use {...fromProps.input} instead of onChange={formProps.input.onChange} value={formProps.input.value}
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				<div>{this.renderError(meta)}</div>
			</div>
		);
	};
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	};
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="description" component={this.renderInput} label="Enter Description" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	//the title and description conneted to renderinput only by its name and redux form
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a title';
	}
	return errors;
};

const formWrapped = reduxForm({ form: 'streamCreate', validate })(StreamCreate);
export default connect(null, { createStream })(formWrapped);
