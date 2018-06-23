import React, { Component } from 'react';
import { 
	Input, 
	Menu
} from 'semantic-ui-react';

export default class MenuBar extends Component {

	render() {
		return (
			<Menu>
			    <Menu.Item header>StarWars</Menu.Item>
			    <Menu.Item className="planet-search-bar">
			      <Input loading={this.props.loading} className='icon' onChange={this.props.searchInit} icon='search' placeholder='Search for planets...' />
			    </Menu.Item>
			    <Menu.Item ><a onClick={this.props.callPrev}>Prev</a></Menu.Item>
			    <Menu.Item ><a onClick={this.props.callNext}>Next</a></Menu.Item>
			    <Menu.Item>
			    	<a onClick={this.props.submitLogout}>Logout</a>
			    </Menu.Item>
			</Menu>
		);
	}
}