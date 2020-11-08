import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="/#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="/#page-top">
              Nome da App
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/#features" className="page-scroll">
                  Funcionalidades
                </a>
              </li>
              {/* <li>
                <a href="/#services" className="page-scroll">
                  Services
                </a>
              </li> */}
              <li>
                <a href="/#portfolio" className="page-scroll">
                  Galeria
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="page-scroll">
                  Testemunhos
                </a>
              </li>
              <li>
                <a href="/#team" className="page-scroll">
                  Sobre nós
                </a>
              </li>
              {/* <li>
                <a href="/#contact" className="page-scroll">
                  Contact
                </a>
              </li> */}
              <li>
                <a href="/documentacao" className="page-scroll">
                  Documentação
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
