import React from "react";
import { ReactComponent as Figmades } from "./design/figmades.svg";
import { ReactComponent as Sketch } from "./design/sketch.svg";
import { ReactComponent as Adobephotoshop } from "./design/adobephotoshop.svg";
import { ReactComponent as Adobeeffects } from "./design/adobeeffects.svg";
import { ReactComponent as Adobexd } from "./design/adobexd.svg";
import { ReactComponent as Adobeillustrator } from "./design/adobeillustrator.svg";

function DesignAndPrototype() {
	return (
		<div className="parent">
			<div className="circle">
				<Figmades />
			</div>
			<div className="circle">
				<Adobeillustrator />
			</div>
			<div className="circle">
				<Adobexd />
			</div>
			<div className="circle">
				<Adobeeffects />
			</div>
			<div className="circle">
				<Adobephotoshop />
			</div>
			<div className="circle">
				<Sketch />
			</div>
		</div>
	);
}

export default DesignAndPrototype;
