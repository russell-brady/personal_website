import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/contact";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData: {},
      githubRepos: null
    };
  }

  getResumeData(){
    fetch('./resumeData.json')
    .then((response) => response.json())
    .then((findresponse)=> {
      this.setState({
        resumeData:findresponse
      })
    })
  }

  getGithubRepos(){
    fetch('https://API.github.com/users/russell-brady/repos')
    .then((response) => response.json())
    .then((findresponse)=> {
      this.setState({
        githubRepos:findresponse
      })
    })
  }

  componentDidMount(){
    this.getResumeData();
    this.getGithubRepos();
  }

  render() {
    return (
      <div className="App">
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <Resume data={this.state.resumeData.resume}/>
          <Portfolio data={this.state.githubRepos}/>
          <Testimonials data={this.state.resumeData.testimonials}/>
          <Contact data={this.state.resumeData.main}/>
          <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
