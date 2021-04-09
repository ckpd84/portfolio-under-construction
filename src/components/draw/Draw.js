import "./draw.css";

const Draw = () => {
	return (
		<div className="circle">
			{/* Grua */}
			<div className="grua">
				<div className="grua-base"></div>
				<div className="grua-container">
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square slimborder">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
				</div>
				<div className="grua-container-2">
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
					<div className="grua-square borderless">
						<div className="equis">X</div>
					</div>
					<div className="grua-square">
						<div className="equis">X</div>
					</div>
				</div>
			</div>
			<div className="wire"></div>
			{/* Computadora */}
			<div className="mac">
				<div className="mac-top">
					<div className="mac-top-screen">
						<div className="square red"> </div>
						<div className="square yellow"> </div>
						<div className="square blue"> </div>
					</div>
				</div>
			</div>
			<div className="mac-trapezoid"></div>
			<div className="mac-base"></div>
			<div className="line"></div>
		</div>
	);
};

export default Draw;
