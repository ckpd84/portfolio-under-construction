import React from "react";

const Iconos = ({ icono }) => {
	return (
		<span className="h-10 w-10 rounded-full bg-gris dark:bg-gradient-to-r  dark:from-salmon dark:to-lila text-gray-50 text-lg flex justify-center items-center">
			{icono}
		</span>
	);
};

export default Iconos;
