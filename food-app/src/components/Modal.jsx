import React from 'react';
import './Modal.css'
import Contact from '../images/icone-contact.png';

const Modal = ({buttonClose, open}) => {
    return ( 
        <React.Fragment>
            {
                open &&
                <div className="modal">
                    <div className="modal_wrapper">
                        <button className="button_close_modal" onClick={buttonClose}>X</button>
                        <h1 className="title_avertissement">Avertissement</h1>
                        <p>Malheureusement ce n'est qu'un projet personnel, il n'y a donc pas de programme, puis  
                            je suis certain que vous n'en n'avez pas besoin.</p>

                        <p>Si ce projet vous à plus et que vous souhaitez un site piur vous faire connaître, attirer plus de client 
                            n'hésitez pas à me contacter 
                            <a className="link_image_enveloppe_contact_modal" href="mailto:julienzimmermann@msn.com">
                                <img className="image_enveloppe_contact_modal" src={Contact} alt="enveloppe_contact" />
                            </a>
                        </p>
                    </div>
                      
                </div>
                
            }   
        </React.Fragment>
     );
}
 
export default Modal;