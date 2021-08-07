import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">

         <div>
            <h1>Get In Touch</h1>
         </div>

         <div className="contact-social-links">

            {/* email*/}
            <div className={"row"}>
              <div className={"col col-6"}>
                <a><i className="fa fa-envelope" aria-hidden="true"></i><span><b>Email:</b> <br/>{email}</span></a>
              </div>
              <div className={"col col-6"}>
                <a><i className="fa fa-phone" aria-hidden="true"></i><span><b>Phone:</b> <br/>{phone}</span></a>
              </div>
            </div>

         </div>

   </section>
    );
  }
}

export default Contact;
