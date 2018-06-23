import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from '../Containers/LoginPage';
import SearchPage from '../Containers/SearchPage';

export default class AppRouter extends Component {

	render() {
		return (
			<BrowserRouter>
             	<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route 
                    	auth={localStorage.getItem('login')} 
                    	exact path="/search" component={SearchPage} 
					/>
            	</Switch>
			</BrowserRouter>
		);
	}
}