import React from "react";
import PropTypes from "prop-types";
import { Container, Table, Image, Row, Col } from "react-bootstrap";

export const PlanetDesc = props => {
	return (
		<Container>
			<Container>
				<Row>
					<Col xs={6} md={6}>
						<Container>
							<Image src="https://wallpapercave.com/wp/3LX78BY.jpg" width={550} height={375} rounded />
						</Container>
					</Col>

					<Col xs={6} md={6}>
						<Container>
							<h6 className="text-left ml-3" style={{ color: "white" }}>
								<p>
									Tatooine is harsh desert world orbiting twin suns in the galaxy’s Outer Rim. In the
									days of the Empire and the Republic, many settlers scratched out a living on
									moisture farms, while spaceport cities such as Mos Eisley and Mos Espa served as
									home base for smugglers, criminals, and other rogues.
								</p>
								<p>
									Anakin Skywalker and Luke Skywalker both once called Tatooine home, and Obi-Wan
									Kenobi spent years in hiding there. Once known as a hive of scum and villainy,
									Tatooine has become quieter since the end of the Galactic Civil War.
								</p>
							</h6>
						</Container>
					</Col>
				</Row>
			</Container>
			<Container>
				<Table bordered hover variant="dark text-center">
					<thead>
						<tr>
							<th>Name</th>
							<th>Climate</th>
							<th>Population</th>
							<th>Orbital Period</th>
							<th>Rotation Period</th>
							<th>Diameter</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{props.name}</td>
							<td>{props.climate}</td>
							<td>{props.population}</td>
							<td>{props.orbital_period}</td>
							<td>{props.rotation_period}</td>
							<td>{props.diameter}</td>
						</tr>
					</tbody>
				</Table>
			</Container>
			;
		</Container>
	);
	PlanetDesc.propTypes = {
		name: PropTypes.string,
		climate: PropTypes.string,
		population: PropTypes.number,
		orbital_period: PropTypes.number,
		rotation_period: PropTypes.number,
		diameter: PropTypes.number
	};
};
