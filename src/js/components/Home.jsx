import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		
		<div>
			<Navbar />
			<div>
				<Jumbotron />
				<Card />
			</div>

			<p>
				<Footer />
			</p>
		</div>
	
	);
};

export default Home;