import '../scss/nav.scss'
import { Link } from 'react-router-dom'
import Data from "../data/navigation.json"
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const navContent = Data.map(content => {
    return content;
})

function Nav() {
    return (
        <div>
            <nav>
                <ul className="nav">
                    {Data.map(content => {
                        return (
                            <Link className="nav-item" to={content.link}>
                                <li>{content.title}</li>
                            </Link>
                        );
                    })}
                </ul>
            <Navbar>
                    
                <MobileMenu title="Menu" className="mobile-main-menu">
                {Data.map(content => {
                        return (
                            <NavItem title={content.title} link={content.link}/>
                        );
                    })}
                    </MobileMenu>

            </Navbar>
            </nav>
        </div>
    )
}

function Navbar(props) {
    return(
        <ul className="navbar-nav"> { props.children }
        </ul>
    )
}

function MobileMenu(props) {
    const [open, setOpen] = useState(false);
    
    return (<li className="dropdown-parent">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.title} <FaAngleDown />
            </a>

            {open && props.children}

        </li>
        );
}


function NavItem(props) {

    const [open, setOpen] = useState(false);
    return(
        <li className="dropdown-child">
            <a href={props.link} className="icon-button" onClick={() => setOpen(!open)}>
                {props.title}
            </a>

            {open && props.children}

        </li>
        );
}



export default Nav;