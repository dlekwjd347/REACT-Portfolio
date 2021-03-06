import React from 'react';
import Typed from "../components/typed";
import Header from "../components/header";
import Footer from "../components/footer";
// import BodyImg from "../components/body";
import { Parallax, Background } from "react-parallax";

function Home() {
  return (
    <>
      <Header />
      {/* <Parallax strength={700}> */}
        {/* <Background className="custom-bg">
          <div
            style={{
              height: 2000,
              width: "100vw",
              backgroundRepeat: "no-repeat",
              // backgroundPosition: "center",
              // position: "fixed",
              // top: "25vh",
              marginTop: "25vh",
              backgroundImage: "url('https://www.moma.org/media/W1siZiIsIjI0Njc4NCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=3a1ed95974c1c0be')"
            }}
          />
        </Background> */}
        <div>


          <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300" />
          <div className="site-wrap" id="home-section">
            <div className="site-mobile-menu site-navbar-target">
              <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                  <span className="icon-close2 js-menu-toggle"></span>
                </div>
              </div>
              <div className="site-mobile-menu-body"></div>
            </div>

            <div className="ftco-blocks-cover-1">
              <div className="site-section-cover">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="lead" data-aos="fade-up">Hi, I'm Liz. I create with <Typed /></h1>
                      <p data-aos="fade-up" data-aos-delay="100">
                        <a className="more-29291" href="/Elizabeth_Lee_Resume.pdf" target="_blank" id="resume">View Resume</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-section">

              <div className="site-section">
                <div className="container" id="aboutMe">
                  <div className="row justify-content-center">
                    <div className="col-md-10">
                      <h2 className="text-primary mb-6 font-weight-bold portheading">About me</h2>
                      <div className="d-md-flex testimony-29101 align-items-stretch portfoliocard animate__animated animate__slideInUp">
                        <div className="image" style={{ backgroundImage: `url("../assets/images/me3.jpg")` }}></div>
                        <div className="text">
                          <blockquote>
                            <p>Trying to solve problems no matter the complexity has always been a welcoming challenge for me. My recent studies has gained me the fields of expertise that includes HTML, CSS, Bootstrap, Javascript, and React. With these skills, I can provide efficient solutions to clients globally.</p>
                            <p>I am currently employed as a Financial Crimes Consultant at K2 Integrity where I provide support to financial institutions like banks and hedge funds to strengthen their Anti-Money Laundering policies and procedures by leveraging advanced screening systems and subject matter expertise.</p>
                            <div className="author">&mdash; Elizabeth Lee</div>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="site-section">
                <div className="container">
                  <div className="row mb-4 text-center">
                    <div className="col">
                      <a href="https://www.linkedin.com/in/elizabeth-lee2018/"><span className="m-2 icon-linkedin"></span></a>
                      <a href="#"><span className="m-2 icon-instagram"></span></a>
                    </div>
                  </div>
                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-7 text-center">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />





          </div>
          <div />
        </div>
      {/* </Parallax> */}
   
    </>)

}

export default Home;