import React from 'react';

function footer() {
    return (
        <>
        <div className="site-section slogancont">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="slogan">Solving problems creatively and executing logically</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="footerend"> 
      <div className="footer site-section footercont">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="site-logo-footer">
                <a className="name" href="index.html">Elizabeth Lee</a>
              </div>
            </div>
            <div className="col-md-8 ml-auto">
              <div id="contact" className="row">
                <div className="col-md-4 ml-auto">
                  <ul className="list-unstyled links">
                    <li><a href="#">e.lee7091@gmail.com</a></li>
                    <li><a href="#">+1 347 626 9292</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled links">
                    <li><a href="https://github.com/dlekwjd347">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/elizabeth-lee2018/">LinkedIn</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
    )
}

export default footer;