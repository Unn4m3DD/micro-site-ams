import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
//import Services from './components/services';
//import Contact from './components/contact';
import JsonData from './data/data.json';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getLandingPageData() {
    this.setState({ landingPageData: JsonData })
  }

  componentDidMount() {
    this.getLandingPageData();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <Navigation />
              <Header data={this.state.landingPageData.Header} />
              <Features data={this.state.landingPageData.Features} />
              {/* <Services data={this.state.landingPageData.Services} /> */}
              <Gallery />
              <Testimonials data={this.state.landingPageData.Testimonials} />
              <Team data={this.state.landingPageData.Team} />
              {/* <Contact data={this.state.landingPageData.Contact} /> */}
            </div>
          </Route>
          <Route exact path="/documentacao">
            <Navigation />
            <About data={this.state.landingPageData.About} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
