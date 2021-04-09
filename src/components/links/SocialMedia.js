import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Iconos from "./Iconos";

const SocialMedia = ({ icono }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "start",
			}}
		>
			<Iconos icono={<FontAwesomeIcon icon={["fab", "github"]} />} />
			<Iconos icono={<FontAwesomeIcon icon={["fab", "linkedin-in"]} />} />
			<Iconos icono={<FontAwesomeIcon icon={["fab", "codepen"]} />} />
		</div>
	);
};

export default SocialMedia;
