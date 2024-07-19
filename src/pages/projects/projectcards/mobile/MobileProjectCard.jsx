import { useState } from 'react'
import { Link } from 'react-router-dom';


const MobileProjectCard = (props) => {

    
	const { project, setProjectsRef, cardBg, cardColor, index } = props;

	const [showImg, setShowImg] = useState(false);

    
    return (
        <Link
            to={project.href ? project.href : "/"}
            onMouseEnter={() => setShowImg(true)}
            onMouseLeave={() => setShowImg(false)}

        >
            <div className="m-project-card" ref={setProjectsRef} style={{ background: cardBg, color: cardColor }}>

                <div className="m-p-c-0">

                    <div className="p-c-1-left">{`(0${(index+1).toString()})`}</div>
                    <div className="p-c-1-right">{project.year}</div>

                </div>

                <div className="m-p-c-1">
                    <div className="p-c-1-mid">{project.name}</div>
                   
                </div>

                <div className="m-p-c-2">
                    
                    <div className="p-c-2-techs">
                        <div className="p-c-2-techs-1">
                            {
                                project.techs.map((tech, i) => (
                                    <span className="techs" key={i}>{tech}</span>
                                ))
                            }

                        </div>

                    </div>

                
                </div>

                <div className="p-status" style={{background: cardColor, color: "#000"}}>
					{project.status}
				</div>


            </div>

            <div className={`project-image ${showImg ? "show-img" : ""}`}>

            </div>

        </Link>
    )
}

export default MobileProjectCard