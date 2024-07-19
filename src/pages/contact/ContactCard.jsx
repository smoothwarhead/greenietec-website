import React from 'react'

const ContactCard = (props) => {

    const { contact, label, setContactsRef, icon } = props;

  return (
    <div className="contact-card contact-card-list" ref={setContactsRef}>

        <div className="contact-card-header">{label}</div>

        <div className="contact-card-con">

            <div className="contact-card-con-inner">								
                <span className="contact-card-icon">
                    <span>
                        {icon}

                    </span>
                </span>
                <span className="contact-card-text-con">
                    <p className="contact-card-text">{contact}</p>
                    
                </span>
            </div>
    
        </div>


    </div>
  )
}

export default ContactCard;