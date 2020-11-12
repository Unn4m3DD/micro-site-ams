import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>Sobre nós</h2>
            <p>
              No contexto da pandemia atual torna-se difícil aceder a serviços necessários à saúde e bem-estar dos nossos animais de estimação.
              Foi por essa mesma razão que surgiu a PAWDEMIC, uma app que torna mais fácil a gestão de todas as necessidades do seu animal, desde 
              a alimentação até à vacinação e idas ao veterinário. 
            </p>
          </div>
          
          {/* <h3>{"No contexto da pandemia atual, o acesso a serviços necessários à saúde dos nossos animais de estimação foi afetada. É por essa razão que esta app foi desenvolvida. "}</h3> */}
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
