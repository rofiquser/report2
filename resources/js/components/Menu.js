import React, { Component ,Fragment} from 'react';
import {Navbar, NavLink} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from "../../image/logo.png";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {Link} from "react-router-dom";


class Menu extends Component {

    constructor(props){
        super();
        this.state={

            sideNavClass:"sideNavOpen"

        }

    }


    render() {
        return (
            <Fragment>

                       <Navbar bg="light" variant="light" expand='lg' className="fixed-top">

                           <Navbar.Brand href="#home"><img className="logo-img" src={img} alt=""/></Navbar.Brand>
                           <a className="my-0 p-2 text-white btn-danger" href="/logout">LogOut</a>
                       </Navbar>

                       <div className={this.state.sideNavClass}>
                            <NavLink><Link className="my-0 p-2 text-white" to="/"><FontAwesomeIcon icon={faHome}/>Home</Link></NavLink>
                           <NavLink><Link className="my-0 p-2 text-white" to="/add"><FontAwesomeIcon icon={faHome}/>Add Admin</Link></NavLink>
                          <NavLink> <Link className="my-0 p-2 text-white" to="/all-admin"><FontAwesomeIcon icon={faHome}/>All Admin</Link></NavLink>
                           <NavLink><Link className="my-0 p-2 text-white" to="/all-user"><FontAwesomeIcon icon={faHome}/>All User</Link></NavLink>
                           <NavLink><Link className="my-0 p-2 text-white" to="/add-kam"><FontAwesomeIcon icon={faHome}/>Add Kam</Link></NavLink>
                           <NavLink><Link className="my-0 p-2 text-white" to="/order-information"><FontAwesomeIcon icon={faHome}/>Order Information</Link></NavLink>
                           <NavLink><Link className="my-0 p-2 text-white" to="/add-instruction"><FontAwesomeIcon icon={faHome}/>User Instruction</Link></NavLink>
                           <NavLink><Link className="my-0 p-2 text-white" to="/all-contact"><FontAwesomeIcon icon={faHome}/>User Contact List</Link></NavLink>


                       </div>

                            <div className="child_component">
                                <div className="content">

                                    {this.props.children}


                                </div>

                            </div>




            </Fragment>
        );
    }
}

export default Menu;
