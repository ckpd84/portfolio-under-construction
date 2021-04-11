import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Iconos from "../iconos/Iconos";

const Footer = () => {
	return (
		<footer className="flex space-x-4">
			<a href="https://github.com/ckpd84" target="_blank" rel="noreferrer">
				<Iconos icono={<FontAwesomeIcon icon={["fab", "github"]} />} />
			</a>
			<a
				href="https://www.linkedin.com/in/cecilia-denaro-7a15801a9/"
				target="_blank"
				rel="noreferrer"
			>
				<Iconos icono={<FontAwesomeIcon icon={["fab", "linkedin-in"]} />} />
			</a>
			<a href="https://codepen.io/ckpd84" target="_blank" rel="noreferrer">
				<Iconos icono={<FontAwesomeIcon icon={["fab", "codepen"]} />} />
			</a>
		</footer>
	);
};

export default Footer;
