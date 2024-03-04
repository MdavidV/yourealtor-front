import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CardImg,
    Modal,
    ModalBody } from "reactstrap";

const MySlides = ({ data })=>{

    const [images, setImages] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    useEffect(()=>{
      const structureImages = async(item)=> {
        const data = await item;
        if(data){
            let items = data.Imagenes;
            if(items){
              items =  items.split(', ');
              setImages(items);
            }
        }else{
            return 0;
        }
    }
    structureImages(data);
    },[]);

    if(images){
      const next = () => {
          const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        };
      
        const previous = () => {
          const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        };
  
        const openModalWithImage = (imageSrc) => {
          setCurrentImage(imageSrc);
          setIsModalOpen(true);
        };
      
      
      const slides = images.map((url, index) => (
          <CarouselItem key={index}>
              <CardImg top width="100%" src={url} alt={`Imagen ${index + 1}`} onClick={() => openModalWithImage(url)} />
          </CarouselItem>
      ));
    
    return(
        <>
        <h2>estoy es Myslides</h2>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>

            <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} size="lg">
              <ModalBody>
                <img src={currentImage} alt="Expanded" style={{ width: "100%" }} />
              </ModalBody>
            </Modal>
        </>
    )
  }
}

MySlides.propTypes = {
    data: PropTypes.object.isRequired
  };

export default MySlides;