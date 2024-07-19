import { ViewContext } from "../../../../context/ViewContext";
import "./menubar.scss";
import { useContext, useEffect, useState } from "react";

function Menubar(props) {

	const { light, dark, loading } = useContext(ViewContext);
	
	const {openMenu, setOpenMenu} = props;

	const [OpenBar, setOpenBar] = useState("close");

	const handleToggle = () => {
		setOpenMenu(!openMenu);
		// setOpenBar(OpenBar === "open" ? "close" : "open")
	}

	useEffect(() => {
		
		if(openMenu){
			setOpenBar("open")
		}else{
			setOpenBar("close")
		}

	},[openMenu]);

	
	return (
		<div
			className="menu-container"
			
			onClick={handleToggle}>
			<i 
				style={loading ? {background: "#fff"} : !openMenu ? {background: light} : {background: dark}} 
				className={OpenBar}
			></i>

			<i 
				style={loading ? {background: "#fff"} : !openMenu ? {background: light} : {background: dark}} 
				className={OpenBar}				
			></i>

			<i 
				style={loading ? {background: "#fff"} : !openMenu ? {background: light} : {background: dark}} 
				className={OpenBar}
			></i>

		</div>
	);
}

export default Menubar;
