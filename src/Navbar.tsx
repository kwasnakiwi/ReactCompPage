import logo from './assets/images/Rectangle 21.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return(<>
        <div className="navbar">
        <ul className="list-navbar">
            <li><Link to='/'><img className="logo" src={logo}/></Link></li>
            <div className="hamburger" onClick={
function showNavbar(): void {
    const navbar2 = document.querySelector('.navbar2') as HTMLElement
        if (navbar2) {
            navbar2.style.display = 'block';
        }
}
            }>☰</div>
    
            <div className="navButtons" id='hom'>
                <li><Link to='/uslugi' className="navBtn">USŁUGI</Link></li>
                <li><Link to='/projects' className="navBtn">PROJEKTY</Link></li>
                <li><Link to='/contact' className="navBtn navBtnRed">KONTAKT</Link></li>
            </div>
        </ul>
    </div>
    <div className='navbar2'>
        <ul className="list-navbar2">
        <div ><span className='x' onClick={
function showNavbar(): void {
    const navbar2 = document.querySelector('.navbar2') as HTMLElement
        if (navbar2) {
            navbar2.style.display = 'none';
        }
}
            }>✕</span></div>
            <li className='first-line'><Link to='/'><img className="logo" src={logo}/></Link></li>
            <div className="navButtons second-line">
                <li><Link to='/uslugi' className="navBtn">USŁUGI</Link></li>
                <li><Link to='/projects' className="navBtn">PROJEKTY</Link></li>
                <li><Link to='/contact' className="navBtn navBtnRed">KONTAKT</Link></li>
            </div>
            
    </ul>
    </div>
    </>
    )
}
export default Navbar