import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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
import {onLogoutUser} from '../actions/index_actions'

class Header extends Component {

    state = {
        isOpen: false
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    // onLogout = () => {
    //     this.props.onLogoutUser();
    //     this.renderNav();

    // };

    // Menentukan apa yang harus ditampilkan di header, (Register dan login / heloo, username)
    renderNav = () => {
        if (this.props.uname == "") {
            // Jika user tidak login
            return (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/register">Register</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/login">Login</NavLink>
                    </NavItem>
                </Nav>
            )
        }
        //  Jika User login
        return (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/ManageProduk">Manage Product</NavLink>
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
                        <DropdownItem onClick = {this.props.onLogoutUser}>
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        )
    }


    render() {
        return (
            <div>
                {/* Navbar */}
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.renderNav()}
                    </Collapse>
                </Navbar>
            </div>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        uname: state.auth.username
    }
}


export default connect(mapStateToProps, {onLogoutUser})(Header)
