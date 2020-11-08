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
                      <td>v1.0<a href=""></a></td>
                      <td><a href="v2_0/index.html"></a></td>
                      <td><a href="v3_0/index.html"></a></td>
                      <td><a href="index.html"></a></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }} >E2: Glossário</td>
                      <td><a href=""></a>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>E3: Relatório Técnico: Visão do Projeto</td>
                      <td>v1.0<a href=""></a>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }} >E4: Relatório Técnico: Análise de Requisitos </td>
                      <td><a href=""></a>
                      </td>
                      <td><a href=""></a>
                      </td>
                      <td></td>
                      <td><a href=""></a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>E5: Relatório de Desenho/Arquitetura</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }} >E6: Protótipo exploratório</td>
                      <td></td>
                      <td><a href="proto_v1/index.html"></a></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>E7: Implementação</td>
                      <td></td>
                      <td></td>
                      <td><a class="popup-with-move-anim" href="#details-lightbox-1"></a></td>
                      <td><a class="popup-with-move-anim" href="#details-lightbox-2"></a></td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }} >E8: Garantia de qualidade</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><a href=""></a></td>
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
