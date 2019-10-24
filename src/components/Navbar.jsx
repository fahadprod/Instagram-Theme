import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Input } from 'reactstrap';
  import { Link } from 'react-router-dom';
  const Navigation = (props) => {
    var res = props.nav.map( (obj, index) => {
      return(
        <div key={index} className="nav_main">
             <Navbar color="light" light expand="md">
          <Link to="/home" className="logo_one"><i className={obj.nav.url}/> &nbsp;<i  className={obj.nav.url1}/> &nbsp;  <img className="insta_logo" src={obj.nav.url5}/></Link>
           
            <Input className="search_bar" type="text" name="" placeholder=" search"/>
            <Nav className=" right_icon" navbar>
            <NavItem >
                <Link className="nav_link" to="/"><i className={obj.nav.url2}/></Link>
              </NavItem>&nbsp;&nbsp;
              <NavItem>
                <Link className="nav_link" to="/"><i className={obj.nav.url3}/></Link>
              </NavItem>&nbsp;&nbsp;
              <NavItem>
                <Link className="nav_link" to="/profile"><i className={obj.nav.url4}/></Link>
              </NavItem>
            </Nav>
          
        </Navbar>
        <p className="second_icon"><Link className="nav_link1" to="/"><i className={obj.nav.url2}/></Link> <Link className="nav_link1" to="/"><i className={obj.nav.url3}/></Link> <Link className="nav_link1" to="/"><i className={obj.nav.url4}/></Link></p>
        </div>
      )
    })
    return(
      <div className="navbar-main">{res}</div>
    )
  }

export default Navigation;