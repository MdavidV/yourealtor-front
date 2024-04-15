import PropTypes from "prop-types";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsappApi = ({ message = 'Hola estoy interesado en un Inmueble.', number = '573178845335'})=>{
    
    return (
        <>
            <a className="pulse" href={'https://api.whatsapp.com/send?phone=' + number + '&text=' + message}>
                <IoLogoWhatsapp/>
            </a>
        </>
    )
}

WhatsappApi.propTypes = {
    message: PropTypes.string,
    number: PropTypes.string,
};

export default WhatsappApi;