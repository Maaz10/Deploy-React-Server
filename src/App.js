import React from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import { Navbar, Nav} from "react-bootstrap"

import Quadratic from './routes/quadrticBezierCurve'
import Cubic from './routes/cubicBezierCurve'
function App() {
	return(
	<Router>
		<Navbar className="navbarcss" fixed="top" expand="lg" variant="dark">

			<Navbar.Brand href="/">TEAM 1</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">

				<Nav className="mr-auto">

					<Nav.Link href="/">Quadratic</Nav.Link>
					<Nav.Link href="/cubic">Cubic</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>


		<div className='body-section'>

			<Switch>
			<Route path="/cubic">
					<Cubic />
				</Route>
				<Route path="/">
					<Quadratic />
				</Route>

			</Switch>

		</div>

		<div className="foot">

			<h5>Copyright © 2021 DSU Computer Graphics Mini Project.</h5>

		</div>


	</Router>
	);

}

export default App;
