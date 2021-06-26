import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { SidebarData } from './SidebarData';
import {IconContext} from 'react-icons';
import { Nav, Navbar, Form, FormControl, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import {Link,NavLink,Redirect,Route }from 'react-router-dom';
import './NavigationBar.css';
import CardSample from './CardSample'
import Search from './Search'

const Styles = styled.div`
  .navbar { background-color: #060b26; min-height: 70px;}
  a, .navbar-nav, .navbar-light .nav-link { 
    color: #ffffff;
    font-size: 20px;
    &:hover { color:#3333ff; }

  }
  .navbar-brand {
    position:relative ;
    font-size: 1.4em;
    color: #ffffff;
    left: 55%;
    &:hover { color: white; }
  }
  .form-center {
    
    position: absolute ;
    left: 25%;
    right: 30%;
  }
`;


function NavigationBar(props){
  const[sidebar,setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return(
    <div>
    <IconContext.Provider value={{color:'#fff'}}>
     <Styles> 
      <Navbar expand="lg" className="navbar">
       
       
       
          <Nav.Link href="#"> 
            <FaIcons.FaBars onClick={showSidebar}/>
          </Nav.Link>
       


        <Navbar.Brand href="/">ASGP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Search/>
        
        <Navbar.Collapse id="basic-navbar-nav" className="navcollapse">
          <Nav className="navright">
            <Nav.Item className="navhome"><Nav.Link><NavLink to="/home">Home</NavLink></Nav.Link></Nav.Item> 
            
            <NavDropdown title={props.name}>
                          <NavDropdown.Item style={{color:"blue"}}>Profile</NavDropdown.Item>
                          <NavDropdown.Item ><NavLink style={{color:"blue"}} to="/login">Logout</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles> 
    <nav className={sidebar ? 'nav-menu active':'nav-menu'}> 
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose/>  
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cname}>
                <Link to={item.path}>
                  {item.icon}
                  
                  <span className="nav-items-span">{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
        </IconContext.Provider>
  </div>
); 
}

export default NavigationBar;