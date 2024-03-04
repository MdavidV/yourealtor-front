import Slider from "react-slick";
import imagen from "../../../assets/Logo_Allys.png"
import { 
    Col, 
    Container, 
    Row, 
    Modal,
    ModalBody} from "reactstrap";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const NextArrow = (props)=> {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
const PrevArrow = (props)=> {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        />
    );
}

const SlickBig = ({ data })=> {

    const [images, setImages] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    
    useEffect(() => {

        const structureImages = async(item)=> {
            const data = await item;
            if(data){
                let items = data.Imagenes;
                if(items){
                    items =  items.split(', ');
                    if(items.length < 3){
                        items.push(items[0]);
                        setImages(items);
                    }else{
                        setImages(items);
                    }                  
                }else{
                    return 0;
                }
            }
        }
        structureImages(data);

    }, []);

    const openModalWithImage = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsModalOpen(true);
    };


    const settings ={
        className: "slick__top",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    
    if(images){

    const slides = images.map((url, index) => (
        <div key={index} className="">
            <img width="100%" src={url} alt={`Imagen ${index + 1}`} onClick={() => openModalWithImage(url)} />
        </div>
    ));

        
    return (
        <>
            <Slider
                {...settings}
            >
                {slides}
            </Slider>
            <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} size="lg">
                <ModalBody>
                    <img src={currentImage} alt="Expanded" style={{ width: "100%" }} />
                </ModalBody>
            </Modal>
        </>
    );
    }
};

SlickBig.propTypes = {
    data: PropTypes.object.isRequired
};

export default SlickBig;