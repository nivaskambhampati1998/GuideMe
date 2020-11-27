import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount = () => {
      
        axios.get('http://localhost:8000/posting/').then(
          res => {
            var data = res.data
            this.setState({data : data})
          },
          err => {
            console.log(err)
          }
        )	
  }
  

  render() {
    return (
      <div>
        {/* ***** Preloader Start ***** */}

        {/* ***** Preloader End ***** */}
        {/* Header */}
        {/* Page Content */}
        <div className="page-heading about-heading header-text" style={{ backgroundImage: 'url(assets/images/heading-6-1920x500.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>Lorem epsum nnnn</h4>
                  <h2>Blog</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  { this.state.data.map(d=>(
                  <div className="col-md-5 col-sm-11">
                    <div className="box" style={{ margin: '10px' }}>
                      <div className="service-item">
                        <NavLink to='/blogdetails' className="services-item-image"><img src="assets/images/blog-3-370x270.jpg" className="img-fluid" alt="" /></NavLink>
                        <div className="down-content">
                          <h4><NavLink to='/blogdetails'>{d.title}</NavLink></h4>
                  <p style={{ margin: 0 }}>  {d.content.substring(0,99)} &nbsp;...&nbsp;&nbsp;</p>
                  <p>|&nbsp;&nbsp; {d.timestamp.substring(0,10)} &nbsp; {d.timestamp.substring(11,19)}&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                  <div className="col-md-12">
                    <ul className="pages">
                      <li><a href="#">1</a></li>
                      <li className="active"><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><i className="fa fa-angle-double-right"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-form">
                  <div className="form-group">
                    <h5>Blog Search</h5>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                    </div>
                    <div className="col-4">
                      <button className="filled-button" type="button">Go</button>
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

export default Blog;