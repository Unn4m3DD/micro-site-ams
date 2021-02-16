import React, { useState } from "react";

import Modal from 'react-modal';
export function Gallery() {
  let [isModalOpened, setModalOpened] = useState(false);
  let [selectedImage, setSelectedImage] = useState("false");
  const imageUrl = [
    { src: "img/delivery.jpeg", alt: "Ração ao domicilio" },
    { src: "img/selfie_dog.jpeg", alt: "Melhore a relação com o seu animal de estimação" },
    { src: "img/online_appointment.jpeg", alt: "Sistema de consultas online" }]
  return (
    <>
      <Modal
        isOpen={isModalOpened}
        onAfterOpen={() => { }}
        onRequestClose={() => setModalOpened(false)}
        style={{
          content: {
            width: "50%",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
        contentLabel="Example Modal"
      >
        <img
          src={selectedImage}
          className="img-responsive"
          alt="Ração ao Domicílio"
        />
      </Modal>
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Galeria</h2>
            <p>
              Explora os nossos serviços!
            </p>
          </div>
          <div className="row">
            {imageUrl.map((item, index) => {
              return <div key={index} className="portfolio-items">
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg"
                      onClick={() => {
                        setModalOpened(true)
                        setSelectedImage(item.src)
                        fetch("http://unn4m3dd.xyz/counter")
                      }}>
                      {" "}
                      <div className="hover-text">
                        <h4>{item.alt}</h4>
                      </div>
                      <img
                        src={item.src}
                        className="img-responsive"
                        alt={item.alt}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
