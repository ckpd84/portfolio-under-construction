import "./css/normalize.css";
import "./css/App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Draw from "./components/draw/Draw";
import AnimatedText from "./components/animated-text/AnimatedText";
import SocialMedia from "./components/links/SocialMedia";

library.add(fab);

function App() {
	return (
		<div className="container">
			<section className="content">
				<h1>Hi! I'm Cecilia</h1>
				<p>Web developer</p>
				<SocialMedia />
			</section>
			<section className="draw">
				<AnimatedText />
				<Draw />
			</section>
		</div>
	);
}

export default App;
