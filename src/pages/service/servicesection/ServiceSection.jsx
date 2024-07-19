import './serviceSection.css';

const ServiceSection = (props) => {


    const { service, setServicesRef, cardBg, cardColor, index} = props;


  return (

    <div className="service-section" ref={setServicesRef} style={{background: cardBg, color: cardColor}}>

        <div className="s-left">
            <span className="s-left-1">
                {`(0${(index+1).toString()})`}

            </span>

            <span className="s-left-2">
                {service.name}

            </span>
            <span className="flex-spacer"></span>
        </div>

        <div className="s-right">
            <span className="s-right-1">
                {
                    service.elements.map((a,i) => (
                        <span className="service-attr attr" key={i}>
                            {a}
                        </span>
                    ))
                }

            </span>

            <span className="s-right-2">

                {service.note}

            </span>
        </div>



    </div>

  )
}

export default ServiceSection