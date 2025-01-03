import downlogo from './assets/images/Logo czarne.png';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="footer">
        <hr className="footer-line"/>
        <div className="footer-content">
            <div className="footer-text1">
                <a href="{% url 'main' %}"><img className="logo-down" src={downlogo}/></a>
                <p className="footer-paragraph">
                    Kreatywne Projektowanie i Precyzyjne Programowanie Stron Internetowych – Tworzymy Strony, Które Wyróżniają się w Sieci, Zwiększają Widoczność i Realizują Twoje Cele Biznesowe
                </p>
            </div>
            <div className="footer-texts">
                <div className="footer-text">
                    <h3 className="footer-title">NASZE USŁUGI</h3>
                    <Link to='/'><p className="footer-paragraph">Strona Główna</p></Link>
                    <Link to='/projects'><p className="footer-paragraph">Projekty</p></Link>
                    <Link to='/uslugi'><p className="footer-paragraph">Usługi</p></Link>
                    <Link to='/contact'><p className="footer-paragraph">Kontakt</p></Link>
                </div>
                <div className="footer-text">
                    <h3 className="footer-title">NW JAK OPISAĆ</h3>
                    <p className="footer-paragraph">FAQ</p>
                    <p className="footer-paragraph">Polityka Prywatności</p>
                </div>
                <div className="footer-text">
                    <h3 className="footer-title">DANE KONTAKTOWE</h3>
                    <p className="footer-paragraph">+48 509 325 235</p>
                    <p className="footer-paragraph">xyz@gmail.com</p>
                    <p className="footer-paragraph">ADRES asfsd3235sd</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer