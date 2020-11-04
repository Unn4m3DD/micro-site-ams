import React, { Component } from 'react'
import "./about.css"
export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row" style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
            <div className="col-xs-12 col-md-6" >
              <div className="about-text" >
                <h2>Documentação</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Why Choose Us?</h3>
                <table class="tg" align="center">
                  <tbody><tr>
                    <th style={{ textAlign: "left" }} >Entregável/Resultado</th>
                    <th >Iter. 1</th>
                    <th >Iter. 2</th>
                    <th >Iter. 3</th>
                    <th >Iter. 4</th>
                  </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>E1: Micro-Site do Projeto</td>
                      <td><a href="v1_1/index.html">v1.1</a></td>
                      <td><a href="v2_0/index.html">v2.0</a></td>
                      <td><a href="v3_0/index.html">v3.0</a></td>
                      <td><a href="index.html">v4.0</a></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }} >E2: Glossário</td>
                      <td><a href="https://drive.google.com/open?id=1XzSBKy8K5ZaaApzSXp7WkbSGoKI6p6H1">v1.0</a>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>E3: Relatório Técnico: Visão do Projeto</td>
                      <td><a href="https://drive.google.com/open?id=1H1VB4Mz8avEIODRysq8SPO0mrian5gFj">v1.2</a>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }} >E4: Relatório Técnico: Análise de Requisitos </td>
                      <td><a href="https://drive.google.com/open?id=1xg6Kp0g3QGplFFkSmicVYzY788ZfpqtR">v1.0</a>
                      </td>
                      <td><a href="https://drive.google.com/open?id=10Hy8RB-8kk0Pb4UdLw_IyB-KO_SB7QYi">v2.0</a>
                      </td>
                      <td></td>
                      <td><a href="https://drive.google.com/open?id=142Bq5_IVk8zMB3LpRj1vz_MkAr8akZRy">v3.0</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>E5: Relatório de Desenho/Arquitetura</td>
                      <td></td>
                      <td></td>
                      <td><a href="https://drive.google.com/open?id=1VfQEQA0K6pK9B5aFKxlYwMxAG_5rXs1n">v1.0</a>
                      </td>
                      <td><a href="https://drive.google.com/open?id=1I8EjYLVb_YQuPH6GgxtYL4zs4EvbTqlO">v2.0</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }} >E6: Protótipo exploratório</td>
                      <td></td>
                      <td><a href="proto_v1/index.html">v1.0</a></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>E7: Implementação</td>
                      <td></td>
                      <td></td>
                      <td><a class="popup-with-move-anim" href="#details-lightbox-1">v1.0</a></td>
                      <td><a class="popup-with-move-anim" href="#details-lightbox-2">v2.0</a></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }} >E8: Garantia de qualidade</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><a href="https://drive.google.com/open?id=16AxO-_JhcQDXa2vPq_SPseCkpw2juHss">v1.0</a></td>
                    </tr>
                  </tbody></table>
              </div >
            </div >
          </div >
        </div >
      </div >
    )
  }
}

export default about
