import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="header-text">
          
        </div>
        {/* Header */}
        {/* Page Content */}
        {/* Banner Starts Here */}
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/images/slider-image-1-1920x600.jpg" style={{width:'100%'}} width={1100} height={500}/>
              <div className="carousel-caption">
                <h4>Find your car today!</h4>
                <h2>Lorem ipsum dolor sit amet</h2>
              </div>   
            </div>
            <div className="carousel-item">
              <img src="assets/images/slider-image-2-1920x600.jpg" style={{width:'100%'}} width={1100} height={500}/>
              <div className="carousel-caption">
                <h4>Fugiat Aspernatur</h4>
                <h2>Laboriosam reprehenderit ducimus</h2>
              </div>   
            </div>
            <div className="carousel-item">
              <img src="assets/images/slider-image-3-1920x600.jpg" style={{width:'100%'}} width={1100} height={500}/>
              <div className="carousel-caption">
                <h4>Saepe Omnis</h4>
                <h2>Quaerat suscipit unde minus dicta</h2>
              </div>   
            </div>
          </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
        {/* Banner Ends Here */}
        <div className="latest-products">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading" style={{ marginTop: '40px' }}>
                  <h2>Top Rated Guides</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item">
                  <div className="icon">
                    <i className="fa fa-user" />
                  </div>
                  <div className="down-content">
                    <h4>John Doe</h4>
                    <p className="n-m"><em>"Tour guides lead visitors through tourist attractions and give information about the attractions' natural and cultural significance. Often, they also act as interpreters for travelers who do not speak the local language. Automated systems like audio tours are sometimes substituted for human tour guides. Tour operators often hire guides to lead tourist groups."</em></p>
                    <button style={{ backgroundColor: 'red', textAlign: 'center', width: '100px', borderRadius: '10px', borderStyle: 'initial', color: 'white' }}> Book </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item">
                  <div className="icon">
                    <i className="fa fa-user" />
                  </div>
                  <div className="down-content">
                    <h4>Jane Smith</h4>
                    <p className="n-m"><em>"Tour guides lead visitors through tourist attractions and give information about the attractions' natural and cultural significance. Often, they also act as interpreters for travelers who do not speak the local language. Automated systems like audio tours are sometimes substituted for human tour guides. Tour operators often hire guides to lead tourist groups."</em></p>
                    <button style={{ backgroundColor: 'red', textAlign: 'center', width: '100px', borderRadius: '10px', borderStyle: 'initial', color: 'white' }}> Book </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item">
                  <div className="icon">
                    <i className="fa fa-user" />
                  </div>
                  <div className="down-content">
                    <h4>Antony Davis</h4>
                    <p className="n-m"><em>"Tour guides lead visitors through tourist attractions and give information about the attractions' natural and cultural significance. Often, they also act as interpreters for travelers who do not speak the local language. Automated systems like audio tours are sometimes substituted for human tour guides. Tour operators often hire guides to lead tourist groups."</em></p>
                    <button style={{ backgroundColor: 'red', textAlign: 'center', width: '100px', borderRadius: '10px', borderStyle: 'initial', color: 'white' }}> Book </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services" style={{ backgroundImage: 'url(assets/images/bg-02.jpg)' }}>
          <div className="latest-products">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Most Visited Places</h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-item">
                    <a><img src="assets/images/product-1-370x270.jpg" alt="" /></a>
                    <div className="down-content" style={{ backgroundColor: '#fff' }}>
                      <h4>The Blue Lagoon, Iceland</h4>
                      <p>Iceland is no doubt one of the hottest new travel destinations.</p>
                      <div className="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button style={{ backgroundColor: 'red', textAlign: 'center', width: '100px', borderRadius: '10px', borderStyle: 'initial', color: 'white' }}> Visit </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-item">
                    <a><img src="assets/images/product-2-370x270.jpg" alt="" /></a>
                    <div className="down-content" style={{ backgroundColor: '#fff' }}>
                      <h4>Machu Picchu, Peru</h4>
                      <p>Tourists are quickly taking note of South America as they look for lesser-known.</p>
                      <div className="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button style={{ backgroundColor: 'red', textAlign: 'center', width: '100px', borderRadius: '10px', borderStyle: 'initial', color: 'white' }}> Visit </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-item">
                    <a><img src="assets/images/product-3-370x270.jpg" alt="" /></a>
                    <div className="down-content" style={{ backgroundColor: '#fff' }}>
                      <h4>Christ the Redeemer, Brazil</h4>
                      <p>You’ve probably seen the photos reflecting the throbs of people huddled.</p>
                      <div className="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button style={{ backgroundColor: 'red', textAlign: 'center', width: '100px', borderRadius: '10px', borderStyle: 'initial', color: 'white' }}> Visit </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services" style={{ backgroundImage: 'url(assets/images/other-image-fullscren-1-1920x900.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Latest blog posts</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <a href="#" className="services-item-image"><img src="assets/images/blog-1-370x270.jpg" className="img-fluid" alt="" /></a>
                  <div className="down-content">
                    <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</a></h4>
                    <p style={{ margin: 0 }}> John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <a href="#" className="services-item-image"><img src="assets/images/blog-2-370x270.jpg" className="img-fluid" alt="" /></a>
                  <div className="down-content">
                    <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a></h4>
                    <p style={{ margin: 0 }}> John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <a href="#" className="services-item-image"><img src="assets/images/blog-3-370x270.jpg" className="img-fluid" alt="" /></a>
                  <div className="down-content">
                    <h4><a href="#">Aperiam modi voluptatum fuga officiis cumque</a></h4>
                    <p style={{ margin: 0 }}> John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="happy-clients">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Reviews</h2>
                  <a href="testimonials.html">read more <i className="fa fa-angle-right" /></a>
                </div>
              </div>
              <div className="col-md-12">
                <div className="owl-clients owl-carousel text-center">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>John Doe</h4>
                      <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>Jane Smith</h4>
                      <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>Antony Davis</h4>
                      <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>John Doe</h4>
                      <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>Jane Smith</h4>
                      <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>Antony Davis</h4>
                      <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner-content">
                  <div className="row">
                    <div className="col-md-8">
                      <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 text-right">
                      <a href="contact.html" className="filled-button">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner-content">
                  <p>Copyright © 2020 Company Name - Template by: <a href="https://www.phpjabbers.com/">PHPJabbers.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

    )
  }
}

export default Home;