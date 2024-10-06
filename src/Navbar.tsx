import logo from './assets/images/Rectangle 21.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar">
        <ul className="list-navbar">
            <li><Link to='/'><img className="logo" src={logo}/></Link></li>
            <div className="hamburger">&#9776;</div>
            <div className="navButtons">
                <li><Link to='/uslugi' className="navBtn">USŁUGI</Link></li>
                <li><Link to='/projects' className="navBtn">PROJEKTY</Link></li>
                <li><Link to='/contact' className="navBtn navBtnRed">KONTAKT</Link></li>
            </div>
        </ul>
    </div>
    )
}
export default Navbar