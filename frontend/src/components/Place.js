import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export class Place extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      search:null
    }
  }
  componentDidMount = () => {
      
        axios.get('http://localhost:8000/places/').then(
          res => {
            var data = res.data
            this.setState({data : data})
          },
          err => {
            console.log(err)
          }
        )	
  }
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render() {
    const items = this.state.data.filter((d)=>{
      if(this.state.search == null)
      {
        return d
      }
      else if(d.monument_name.toLowerCase().includes(this.state.search.toLowerCase()) || d.city.toLowerCase().includes(this.state.search.toLowerCase())){
        return d
      }
    }).map(d=>{
      return (
        <div className="col-md-5 col-sm-11">
          <NavLink to={{pathname:'/placedetails/'+d.monument_id,state:{details:d}}} className="services-item-image">
            <div className="box" style={{ margin: '10px' }}>
              <div className="service-item">
                <img src={"http://localhost:3000"+d.image} className="img-fluid" alt="" />
                <div className="down-content">
                  <h4>{d.monument_name}</h4>
                  <h6>{d.city}</h6>
                  <p style={{ margin: 0 }}>  {d.basicinfo} &nbsp;...&nbsp;&nbsp;</p>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      )
    })
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
                  <h2>Place</h2>
                  <Link to={'/addPlace'}><a className='btn btn-primary' href="">Add Place</a></Link>
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
                  {items}
                  <div className="col-md-12">
                    <ul className="pages">
                      <li className="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
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
                    <h5>Place Search</h5>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <input type="text" placeholder="Search Keywords" onChange={(e)=>this.searchSpace(e)} style={{ border:'none',backgroundColor:'#f33f3f99',color:'white',padding: '12px 20px',margin: '8px 0',boxSizing: 'border-box',borderRadius:'5%' }} />
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
      </div>

    )
  }
}

export default Place;