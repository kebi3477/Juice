import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './js/Login';
import Join from './js/Join';
import FindID from './js/FindID';
import FindPW from './js/FindPW';
import Home from './js/Home';
import CreateGame from './js/CreateGame';	
import CreateGroup from './js/CreateGroup';	
import WritePost from './js/WritePost';	
import MyPage from './js/MyPage';	

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/home" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/join" component={Join} />
				<Route exact path="/findid" component={FindID} />
				<Route exact path="/findpw" component={FindPW} />
				<Route exact path="/createGame" component={CreateGame} />
				<Route exact path="/createGroup" component={CreateGroup} />
				<Route exact path="/writePost" component={WritePost} />
				<Route exact path="/myPage" component={MyPage} />
			</Router>
		</div>
	);
}

export default App;
