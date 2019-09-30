import React, { Component } from 'react';

class Portfolio extends Component {

  render() {
    
    var data = this.props.data;
    if(data){
      
      console.log(data);
      var projects = data.map(function(project){
        
        var sourcestring = require('../resources/github.png')
        return (
          <div key={project.name} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={project.html_url} title={project.name}>
               <img alt={project.title} src={sourcestring}/>
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{project.name}</h5>
                     <p>{project.description}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
        )
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Projects.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
