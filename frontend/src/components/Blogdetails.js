import React, { Component } from 'react'

export class Blogdetails extends Component {
    render() {
        return (
            <div>
                {/* Page Content */}
                <div className="page-heading about-heading header-text" style={{ backgroundImage: 'url(assets/images/heading-6-1920x500.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content">
                                    <h4 />
                                    <h2>Blog details</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed. Ex, id autem cum assumenda, quisquam cupiditate amet dolorem atque ipsam pariatur sequi voluptatem est nesciunt eum, aspernatur, tenetur rem. <br />
                                    <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, consequatur, magnam. Dolorum vitae a vel quisquam. Fuga quia suscipit id veritatis sint earum impedit corporis quidem eum consectetur ipsam ex sequi ad,
            distinctio enim tenetur eveniet eligendi. Laborum, sapiente, magnam.</p>
                                <br />
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, modi.</h5>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam officia in adipisci. Corporis rem beatae cupiditate neque consequuntur necessitatibus expedita laudantium temporibus quam ex quidem, aut non blanditiis soluta deserunt
            dolores mollitia repudiandae voluptatibus perspiciatis dolor quos distinctio! Atque, magnam. <br />
                                    <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt dolore ducimus, ad itaque reprehenderit repellat dignissimos, qui velit dolores voluptas.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="left-content">
                                    <h4>Lorem ipsum dolor sit amet.</h4>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate
              corrupti.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, minus?</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <img src="assets/images/blog-image-fullscren-1-1920x700.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="send-message">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Leave a Comment</h2>
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
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your Message" required defaultValue={""} />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" className="filled-button">Submit</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="left-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur. Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate
              corrupti.</p>
                                    <br />
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
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Book Now</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="contact-form">
                                    <form action="#" id="contact">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input type="text" className="form-control" placeholder="Pick-up location" required />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input type="text" className="form-control" placeholder="Return location" required />
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input type="text" className="form-control" placeholder="Pick-up date/time" required />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input type="text" className="form-control" placeholder="Return date/time" required />
                                                </fieldset>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Enter full name" required />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input type="text" className="form-control" placeholder="Enter email address" required />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input type="text" className="form-control" placeholder="Enter phone" required />
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Blogdetails;