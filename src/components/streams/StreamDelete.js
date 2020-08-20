import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
	componentWillMount() {
		this.props.fetchStream(this.props.match.params.id);
	}
	renderActions() {
		const { id } = this.props.match.params;
		return (
			//we user </React.Fragment> because of the semntic css if we use div the classname of it wont be affecting the direct under him div so </React.Fragment>(can use as <>,</> shortcut) is like transparent div
			<React.Fragment>
				<button onClick={() => this.props.deleteStream(id)} className="ui button negative">
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}
	renderContent() {
		if (!this.props.stream) {
			return <div>Are you sure you want to delete this stream?</div>;
		}
		return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
	}
	render() {
		return (
			<Modal
				onDismiss={() => history.push('/')}
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
			/>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	//ownProps===props of StreamDelete
	return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
