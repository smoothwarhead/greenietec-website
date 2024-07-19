import "./tools.css";
import { ReactComponent as GearLight } from "./gearlight.svg";
import { ReactComponent as GearSolid } from "./gearsolid.svg";
import { ReactComponent as GearThin } from "./gearthin.svg";
import { ReactComponent as WrenchThin } from "./wrenchthin.svg";

function Tools() {
	return (
		<div className="tools">
			<GearSolid className="solid" />
			<GearLight className="light" />
			<GearThin className="thin" />
			<WrenchThin className="wrench" />
		</div>
	);
}

export default Tools;
