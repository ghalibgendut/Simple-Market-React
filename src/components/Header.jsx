import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Form
} from 'reactstrap';

class Header extends Component {

    state = {
        isOpen : false
    }

    toggle = () => this.setState({isOpen : !this.state.isOpen});


    render() {
        return (
            <div>
                {/* Navbar */}
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/register">Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/login">Login</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Hello, {this.props.uname}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>



                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        uname: state.auth.username
    }
}


export default connect(mapStateToProps)(Header)
