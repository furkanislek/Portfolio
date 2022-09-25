import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions 
              </p>
            </div>
          </div>
          <div className="row" >
            <aside className="eigth columns footer-widgets"  >
              <div  style={{textAlign:"center", marginLeft:"150px"}}>
               <button onClick={() => window.location = 'mailto:furkanakifislek@gmail.com'} style={{textAlign:"center"}}>Contact Me</button>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}