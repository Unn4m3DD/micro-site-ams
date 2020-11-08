import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Galeria</h2>
            <p>
              Explora os nossos serviços!
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/delivery.jpeg"
                      title="Ração ao Domicílio"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Ração ao Domicílio</h4>
                      </div>
                      <img
                        src="img/delivery.jpeg"
                        className="img-responsive"
                        alt="Ração ao Domicílio"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/selfie_dog.jpeg"
                      title="Melhore a relação com o seu animal de estimação"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Melhore a relação com o seu animal de estimação</h4>
                      </div>
                      <img
                        src="img/selfie_dog.jpeg"
                        className="img-responsive"
                        alt="Melhore a relação com o seu animal de estimação"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/online_appointment.jpeg"
                      title="Sistema de consultas online"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Sistema de consultas online</h4>
                      </div>
                      <img
                        src="img/online_appointment.jpeg"
                        className="img-responsive"
                        alt="Sistema de consultas online"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
