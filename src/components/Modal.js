import React from 'react';
import ReactDOM from 'react-dom';

const modal = (props) => {
	return ReactDOM.createPortal(
		<div onClick={props.onDismiss} className="ui dimmer modals visibale active">
			<div onClick={(e) => e.stopPropagation()} className="ui standard modal visibale active">
				<div className="header">{props.title}</div>
				<div className="content">{props.content}</div>
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		document.getElementById('modal')
	);
};
export default modal;
