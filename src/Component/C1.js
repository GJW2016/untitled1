import React , {Component} from 'react';
import {HeaderWrapper , Logo , Nav,NavItem,NavSeach , Addition , Button,SeearchWrapper} from "./C2";
import { CSSTransition } from 'react-transition-group';

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };

    }


    render() {
        return(
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className={'left active'}>Culture Info</NavItem>
                    <NavItem className={'left'}>Data Analysis</NavItem>
                </Nav>
            </HeaderWrapper>
            )
    }
}

export default Header;