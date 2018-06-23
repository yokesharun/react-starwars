import React, { Component } from 'react';
import { 
	Container
} from 'semantic-ui-react';
import {
	Redirect
} from 'react-router-dom';
import * as Constant from '../../Constants';
import MenuBar from './Components/MenuBar';
import PlanetFeed from './Components/PlanetFeed';
import './style.css';

export default class SearchPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			q: '',
			loading: Constant.FALSE,
			planets: [],
			page_count: 1,
			next_url : '',
			prev_url : '',
			login: Constant.TRUE
		};
	}

	loading(condition){
    	this.setState({loading: condition});
	}

	searchInit(e){
		const initURL = Constant.SEARCH_PLANET+'?page='+this.state.page_count+
    		'&search='+ e.target.value;
    	this.callAPI(initURL);	
	}

	callNext(){
    	console.log(this.state.next_url);
    	if(this.state.next_url){
    		this.callAPI(this.state.next_url);
    	}
	}

	callPrev(){
    	if(this.state.next_url){
    		this.callAPI(this.state.prev_url);
    	}
	}

	callAPI(incomingURL){
    	this.loading(Constant.TRUE);
    	const config = {
		    headers: {
		    	'Access-Control-Allow-Origin': '*',
		    	'crossDomain': true
		    }
		};
		console.log('called');
    	fetch(
    		incomingURL, config
    	).then(data => data.json())
    	.then((result) => {
    		console.log(result);
		    this.setState({ 
		    	planets : result.results,
		    	prev_url : result.previous,
		    	next_url : result.next,
		    });
		    this.loading(Constant.FALSE);
			}).catch((err) => {
		    console.log(err);
			});
	}

	submitLogout(){
    	localStorage.setItem('login', Constant.FALSE);
    	this.setState({ login: Constant.FALSE });
	}

	render() {

    	const { 
    		loading, 
    		planets, 
    		login
    	} = this.state;

    	if (login === Constant.FALSE) {
			return <Redirect to='/' />;
		}

		return (
			<Container>
            	<MenuBar 
            		submitLogout={() => this.submitLogout()} 
            		callPrev={ () => this.callPrev() }
            		callNext={ () =>this.callNext() }
            		loading={loading} searchInit={ (e) => this.searchInit(e) } 
            	/>
				<PlanetFeed 
                	planets={planets}
				/>
			</Container>
		);
	}
}