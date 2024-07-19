import React from "react";
import "./gridcard.css";
import GridData from "./GridData";
import Box from "./Box";

const DataInfo = (values) => {
	return (
		<>
			<Box
				// key={values.id}
				header={values.header}
				desp={values.desp}
				nub={values.nub}
				image={values.image}
			/>
		</>
	);
};

function Gridcard() {
	return <div className="grid">{GridData.map(DataInfo)}</div>;
}

export default Gridcard;
