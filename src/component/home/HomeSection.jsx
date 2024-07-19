import './home-section.scss';

const HomeSection = (props) => {

    const { data } = props;


  return (
    <div className="scroll-panel">
        <div className="outer">
            <div className="inner">
                <div className="scroll-bg">

                
                    <div className="scroll-bg-content">
                        <div className="section-up">
                            <div className="scroll-devh1">{data.title}</div>
                        </div>

                        <div className="section-btm">

                            <div className="scroll-devh2">{data.subtitle}</div>

                            <p className="scroll-devp">
                            {data.text}
                            </p>



                        </div>

                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>

  )
}

export default HomeSection;