import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
/*----Own Components Import----*/
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
	// router pass props automticly to the url
	//Switch look all difrent route and let you choose only one so you wont get /new and /:id in same page
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" exact component={StreamCreate} />
						<Route path="/streams/edit/:id" exact component={StreamEdit} />
						<Route path="/streams/delete/:id" exact component={StreamDelete} />
						<Route path="/streams/:id" exact component={StreamShow} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
