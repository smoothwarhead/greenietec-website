import "./menubar.scss";
import { useState } from "react";

function Menubar({ slideMenu}) {
	const [OpenBar, setOpenBar] = useState("close");
	return (
		<div
			className="menu-container"
			onClick={() => setOpenBar(OpenBar === "open" ? "close" : "open")}>
			<i className={OpenBar}></i>
			<i className={OpenBar}></i>
			<i className={OpenBar}></i>
		</div>
	);
}

export default Menubar;
