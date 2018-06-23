import React, { Component } from 'react';
import { 
	Item,
	List,
	Card
} from 'semantic-ui-react';

export default class PlanetFeed extends Component {

	render() {

    	const Items = this.props.planets.map(function(eachPlanet){
    			return (
    				<Card className="planet-card" key={eachPlanet.created}>
    					<Item.Content >
						<Item.Header as='a'>{eachPlanet.name}</Item.Header>
						<Item.Meta>Planet Description</Item.Meta>
						<Item.Description>
							<List>
								<List.Item>
									<List.Header>Rotation Period</List.Header>
									{eachPlanet.rotation_period}
								</List.Item>
								<List.Item>
									<List.Header>Orbital Period</List.Header>
									{eachPlanet.orbital_period}
								</List.Item>
								<List.Item>
									<List.Header>Diameter</List.Header>
									{eachPlanet.diameter}
								</List.Item>
								<List.Item>
									<List.Header>Climate</List.Header>
									{eachPlanet.climate}
								</List.Item>
								<List.Item>
									<List.Header>Gravity</List.Header>
									{eachPlanet.gravity}
								</List.Item>
							</List>
						</Item.Description>
					</Item.Content>
				</Card>
    				);
    		});
		return (
			<Item.Group>
				{Items}
			</Item.Group>
		);
	}
}