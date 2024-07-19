import { Link, NavLink } from 'react-router-dom';
import './header.css'
import "./header.css";
import { ReactComponent as SvgIcon } from "../../../assets/svgs/logo.svg";
import { useContext, useState } from 'react';
import ScrollContext from '../../../context/ScrollContext';
import { navigations } from './navigations';
import NavContext from '../../../context/NavContext';
import { ViewContext } from '../../../context/ViewContext';





const Header = () => {

	const { header} = useContext(ScrollContext);
	const { light, loading } = useContext(ViewContext);

	const { navs, setNavs } = useContext(NavContext);


	

	const handleLinks = (id) => {
		const updatedNavs = navs.map((nav) => {
			if(nav.id.toString() === id.toString()){
				return {...nav, active: true};

			}else{
				return 	{...nav, active: false};
			}
		});

		setNavs(updatedNavs);
	}
	

	return (

		
		<div className="header" ref={header} >

			<Link className="logo" to="/">
				<div className="logo-pic">
					<SvgIcon fill={loading ? "#fff" : light} />
				</div>
				<div className="logo-text" style={loading ? {color: "#fff"} : {color: light}}>greenietec software</div>
			</Link>

			<div className="navbar">
				<ul>

					{
						navs.map((nav, i) => (
							<li key={i}>
								
								<Link 
									to={nav.href} 
									style={loading ? {color: "#fff"} : {color: light}} 										
									onClick={() => handleLinks(nav.id)}
								
								>
									{nav.name}
								</Link>

								{nav.active && <span className="item-el" style={loading ? {background: "#fff"} : {background: light}}></span>}

							</li>
						))
					}
					
				</ul>
				
			</div>
			{/* <div className="menu-bar" onClick={handleToggle}>
				
				<Menubar />

			</div> */}

		</div>
	
	)
}

export default Header;