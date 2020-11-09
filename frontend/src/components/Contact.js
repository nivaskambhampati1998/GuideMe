import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="page-heading contact-heading header-text" style={{ backgroundImage: 'url(assets/images/heading-4-1920x500.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>Lorem ipsum dolor</h4>
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="find-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Our Location on Maps</h2>
                </div>
              </div>
              <div className="col-md-8">
                {/* How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
*/}
                <div id="map">
                  <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="330px" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-content">
                  <h4>About our office</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate
              corrupti.</p>
                  <ul className="social-icons">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="send-message">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Send us a Message</h2>
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact-form">
                  <form id="contact" action method="post">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required />
                        </fieldset>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail Address" required />
                        </fieldset>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your Message" required defaultValue={""} />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <img src="assets/images/team_01.jpg" className="img-fluid" alt="" />
                <h5 className="text-center" style={{ marginTop: '15px' }}>John Doe</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: '15px' }}>
          <div className="page-heading about-heading header-text" style={{ backgroundImage: 'url(assets/images/heading-1-1920x500.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-content">
                    <h4>about us</h4>
                    <h2>Gide Me</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="best-features about-features">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-image">
                    <img src="assets/images/about-1-570x350.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="left-content">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis
                ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium
                quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
                    <ul className="social-icons">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="#"><i className="fa fa-behance" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-members">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                  </div>
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex
              fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
              Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quae eveniet tempora reprehenderit quo, necessitatibus vel sit laboriosam, sunt obcaecati quisquam explicabo voluptatibus earum facilis quidem fuga maiores. Quasi, obcaecati?
              <br /><br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, est officiis. Ipsam quas consequuntur adipisci quis, fuga pariatur eius eveniet qui similique nulla inventore accusantium, suscipit asperiores quibusdam
              culpa iure!</p>
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

export default Contact;