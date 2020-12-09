import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
  
function portfolio() {
    return (
        <>
            <Header />
  <div className="page-section">
          <div className="container">
            <div className="text-center">
              <h2 className="portheading" id="projects">PORTFOLIO</h2>
              <h3 className="section-subheading text-muted psub">Dynamically created projects</h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0 portfoliocardtop">
                <div className="portfolio-item post-entry-1 h-100 portfoliocard animate__animated animate__slideInUp">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div> 
                    <img className="img-fluid portcover" src="/assets/images/gray-concrete-pavement-with-yellow-and-white-paint-273786.jpg" alt="portfolio1" />
                  </a>
                  <div className="post-entry-1-contents">
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Simpli-Stocks</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0 portfoliocardtop">
                <div className="portfolio-item post-entry-1 h-100 portfoliocard animate__animated animate__slideInUp">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid portcover" src="assets/images/blue-swimming-pool-water-3695350.jpg" alt="" />
                  </a>
                  <div className="post-entry-1-contents">
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Pokemon Quiz</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0 portfoliocardtop">
                <div className="portfolio-item post-entry-1 h-100 portfoliocard animate__animated animate__slideInUp">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid portcover" src="assets/images/man-with-telescope-2703475.jpg" alt="" />
                  </a>
                  <div className="post-entry-1-contents">
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Weather Dashboard</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0 portfoliocardbot">
                <div className="portfolio-item post-entry-1 h-100 portfoliocard animate__animated animate__slideInUp">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img src="assets/images/stylish-yellow-stairway-in-creative-building-3802666.jpg" alt="Image"
                    className="img-fluid portcover" />
                  </a>
                  <div className="post-entry-1-contents">
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Media Made</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0 portfoliocardbot">
                <div className="portfolio-item post-entry-1 h-100 portfoliocard animate__animated animate__slideInUp">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid portcover" src="assets/images/three-pink-green-and-yellow-houses-2904142.jpg" alt="" />
                  </a>
                  <div className="post-entry-1-contents">
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Eat Da Burger!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0 portfoliocardbot">
                <div className="portfolio-item post-entry-1 h-100 portfoliocard animate__animated animate__slideInUp">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid portcover" src="assets/images/close-up-of-hand-over-white-background-255527.jpg" alt="" />
                  </a>
                  <div className="post-entry-1-contents">
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Flex Overflow</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="close-modal" data-dismiss="modal"><img src="/assets/images/close-icon.svg" alt="Close modal" /></div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="modal-body">
            <h2 className="text-uppercase">Simpli-Stocks</h2>
            <p className="item-intro text-muted">No more financial mumbo jumbo.</p>
            <img className="img-fluid d-block mx-auto" src="/assets/images/simpli-stocks.JPG" alt="" />
            <p>Providing an easy-to-use platform for researching a potential investment opportunity's financial data and news stories. The main differentiator between our product and existing outlets is they are not easy to understand or navigate. Our platform is user friendly for people who are not savvy with complex financial knowledge.</p>
            <a href="https://black03mach.github.io/ticker_query/" target="_blank"><button className="btn btn-primary" type="button" >
              <i className="fas fa-times mr-1"></i>
                                See Project
                            </button></a>
            <a href="https://github.com/black03mach/ticker_query" target="_blank"><button className="btn btn-warning" type="button" >
              <i className="fas fa-times mr-1"></i>
                              See Github
                          </button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="close-modal" data-dismiss="modal"><img src="/assets/images/close-icon.svg" alt="Close modal" /></div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="modal-body">
            <h2 className="text-uppercase">Pokemon Quiz</h2>
            <p className="item-intro text-muted">Test your knowledge as a pokemon trainer</p>
            <img className="img-fluid d-block mx-auto" src="/assets/images/PokemonQuiz.JPG" alt="" />
            <p>This quick quiz will test your basic Pokemon knowledge. <br /> Try to answer the questions within
                                the time limit. <br />Keep in mind that incorrect answers will penalize your score/time by five seconds!</p>
            <a href="https://dlekwjd347.github.io/Elizabeth-MCQuiz/index.html" target="_blank"><button className="btn btn-primary" type="button">
              <i className="fas fa-times mr-1"></i>
                                  See Project
                              </button></a>
            <a href="https://github.com/dlekwjd347/Elizabeth-MCQuiz" target="_blank"><button className="btn btn-warning" type="button" >
              <i className="fas fa-times mr-1"></i>
                                See Github
                            </button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="/assets/images/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Weather Dashboard</h2>
                      <p className="item-intro text-muted">AS A traveler I want to see the weather outlook for multiple cities
                                          so that I can plan a trip accordingly</p>
                      <img className="img-fluid d-block mx-auto" src="/assets/images/WeatherDash.JPG" alt="" />
                      <p>To retrieve data from another application's API to use it in the context of my own, I can access their data to use its functionality to retrieve data for cities. This Weather Dashboard will run in the browser using the Weather API from <a href="https://openweathermap.org/api">OpenWeather API.</a></p>
                      <a href="https://dlekwjd347.github.io/Elizabeth-Weather-Dash/index.html" target="_blank">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-times mr-1"></i>
                                          See Project
                                      </button></a>
                      <a href="https://github.com/dlekwjd347/Elizabeth-Weather-Dash" target="_blank">
                        <button className="btn btn-warning" type="button" >
                          <i className="fas fa-times mr-1"></i>
                                        See Github
                                    </button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="/assets/images/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">MEDIA MADE</h2>
                      <p className="item-intro text-muted">Have you ever found yourself watching your favorite TV show and wish you could wear a piece of clothing one of the characters is wearing? Well this application is perfect for you! Look no further! We have done all the research and provided all the outfits of your favorite tv show!</p>
                      <img className="img-fluid d-block mx-auto" src="/assets/images/mediamadegif.gif" alt="Media Made" />
                      <p>Be inspired by your favorite TV shows and curate your own personal closet. When people go on our application, we are providing an easy to use platform that aggregates outfits and brands based on TV shows that may otherwise be difficult to find. People will feel inspired and learn how to create their own outfits. Given our society’s climate today, online shopping is becoming more prevalent as buyers are turning towards e-commerce sources.</p>
                      <ul className="list-inline">
                        <li>Date: November 2020</li>
                      </ul>
                      <a href="https://damp-ocean-72048.herokuapp.com/" target="_blank">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-times mr-1"></i>
                                          See Project
                                      </button></a>
                      <a href="https://github.com/AndreG303/MEDIA-MADE" target="_blank">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-times mr-1"></i>
                                          See Github
                                      </button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="/assets/images/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Eat Da Burger!</h2>
                      <p className="item-intro text-muted">This burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). <br /> This app will follow the MVC design pattern; use Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.</p>
                      <img className="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/dlekwjd347/Elizabeth-Burger/master/public/assets/screenshots/Capture1.JPG" alt="" />
                      <ul>
                        <li>Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.</li>

                        <li>Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.</li>

                        <li>Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.</li>

                        <li>The app will store every burger in a database, whether devoured or not</li></ul>
                      <ul className="list-inline">
                        <li>Date: August 2020</li>
                      </ul>
                      <a href="https://rocky-cliffs-43396.herokuapp.com/" target="_blank">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-times mr-1"></i>
                                          See Project
                                      </button></a>
                      <a href="https://github.com/dlekwjd347/Elizabeth-Burger" target="_blank">
                        <button className="btn btn-warning" type="button" >
                          <i className="fas fa-times mr-1"></i>
                                        See Github
                                    </button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="/assets/images/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Flex Overflow</h2>
                      <p className="item-intro text-muted">As a coding student I want to be able to post questions or answer questions of my fellow students.<br />
                                          I also want to be able to quiz myself on possible interview questions. So that I can be prepared for any new challenges.</p>
                      <img className="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/dlekwjd347/Project-2-2020/master/public/images/ForumPage.JPG" alt="" />
                      <img className="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/dlekwjd347/Project-2-2020/master/public/images/ProjectPage.JPG" alt="" />

                      <p>The Flex Overflow team is comprised of four Full Stack Engineers collaborating on one specific idea, Preparation.<br /><br />

                                          We at Flex Overflow understand that you can never be over prepared when it comes to job and skill knowledge.<br />
                                          We wanted to help create an app that will not only help you prepare for your next big interview but connect with those peers on some of the more in depth questions that will come up during the length of a Full Stack Course.<br />
                                          Our mission is to help coders collectively prepare for the road ahead and create a platform that will connect users worldwide.</p>
                      <ul className="list-inline">
                        <li>Date: September 2020</li>
                        <a href="https://pure-temple-84221.herokuapp.com/" target="_blank">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-times mr-1"></i>
                                              See Project
                                          </button></a>
                        <a href="https://github.com/dlekwjd347/Project-2-2020" target="_blank">
                          <button className="btn btn-warning" type="button" >
                            <i className="fas fa-times mr-1"></i>
                                            See Github
                                        </button></a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<Footer />








</>
    );
}
  

export default portfolio;
  