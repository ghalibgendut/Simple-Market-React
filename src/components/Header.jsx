import React, { Component } from 'react'
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
    NavbarText
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
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/register">Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header
