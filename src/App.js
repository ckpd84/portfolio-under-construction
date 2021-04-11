import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Draw from "./components/draw/Draw";
import AnimatedText from "./components/animated-text/AnimatedText";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import About from "./components/about/About";

library.add(fab);

function App() {
	return (
		<Router>
			<div className="flex flex-col justify-between h-screen items-center pt-5 pb-5">
				<About />
				<AnimatedText />
				<Draw />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
