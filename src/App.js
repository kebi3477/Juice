import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './js/Login';
import Join from './js/Join';
import FindID from './js/FindID';
import FindPW from './js/FindPW';

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/login" component={Login} />
				<Route exact path="/join" component={Join} />	
				<Route exact path="/findid" component={FindID} />
				<Route exact path="/findpw" component={FindPW} />
			</Router>
		</div>
	);
}

export default App;
