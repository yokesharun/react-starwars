import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { 
	Button, 
	Form,
	Container,
	Message
} from 'semantic-ui-react';
import * as Constant from '../../Constants';
import './style.css';

export default class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			validation: false,
			validationMessage: ''
		};
	}

	submitForm(){
		if (this.state.username === 'Luke' && this.state.password === '19BBY') {
			localStorage.setItem('login', Constant.TRUE);
			this.setState({ 
            	validation: Constant.TRUE, 
            	validationMessage: ''
			});
		} else {
			this.setState({ 
            	validation: Constant.FALSE, 
            	validationMessage: Constant.INVALID_CREDENTIALS 
			});
		}
	}

	render() {

		const {validation, validationMessage} = this.state;

		if (validation === Constant.TRUE) {
			return <Redirect to='/search' />;
		}

		return (
			<Container>
				<div className="text-credentials">
					<h3>Sample Username : Luke</h3>
					<h3>Sample Password : 19BBY</h3>
				</div>
				{ validationMessage && 
                    <Message
                    	error
                    	header={validationMessage}
                    	content=''
                    />
				}
				<Form>
					<Form.Field>
						<label>Username</label>
						<input name="username" type="text" onChange={ e => this.setState({ username : e.target.value}) } />
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input type="password" name="password" onChange={ e => this.setState({ password : e.target.value}) } />
					</Form.Field>
					<Button onClick={() => this.submitForm() } type='submit'>Submit</Button>
				</Form>
			</Container>
		);
	}
}