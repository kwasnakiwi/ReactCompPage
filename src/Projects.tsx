import projectimg1 from './assets/images/Zrzut ekranu 2024-08-10 115841 (1).png';
import projectimg2 from './assets/images/Zrzut ekranu 2024-08-10 120008.png';
import projectimg3 from './assets/images/Zrzut ekranu 2024-08-10 120158.png';
import topimage1 from './assets/images/Formum 2.png';
import topimage2 from './assets/images/5 1.png';
import topimage3 from './assets/images/Wizytowka 2.png';
import topimage4 from './assets/images/Sklep 2.png';
import ulotka1 from './assets/images/Wariant 3 (C).png';
import ulotka2 from './assets/images/Rewers (3).png';
import app1 from './assets/images/linkedin-square-icon 1.png';
import app2 from './assets/images/black-instagram-icon 1.png';
import app3 from './assets/images/github-icon 1.png';

function Projects() {
    return<>
        

		<section className="center-container">
			<div className="web-top3">
				<div className='web-top-text3'>
					<h1 className="title3">
						Portfolio Projektów: Wykonane Strony WWW, Sklepy E-commerce i Rozwiązania Dostosowane
					</h1>
					<p className="under-title3">
						Odkryj nasze wyjątkowe projekty, które ilustrują naszą szeroką gamę usług w zakresie tworzenia stron internetowych, sklepów e-commerce oraz rozwiązań dostosowanych do indywidualnych potrzeb. Nasza grupa specjalizuje się w kompleksowej realizacji projektów od koncepcji aż po wdrożenie, zapewniając wysoką jakość i funkcjonalność każdej witryny.
					</p>
				</div>
				<div className='top-images'>
					<div className="topimages-box1">
						<img src={topimage1}/>
						<img src={topimage2}/>
					</div>
					<div className="topimages-box2">
						<img src={topimage3}/>
						<img src={topimage4}/>
					</div>
				</div>	
			</div>
			<div className="mini-texts">
				<h5 className="mini-text text1">Strony firmowe</h5>
				<h5 className="mini-text">E-commers</h5>
				<h5 className="mini-text text3" id="mini-text1">Customowe</h5>
			</div>
			<div className='apps'>
				<img src={app1}/>
				<img src={app2}/>
				<img src={app3}/>
			</div>
			<section className="projects-section">
				<h2 className='websites-title'>Strony Internetowe</h2>
				<hr className='web-line' />
				<div className="projects">
					<div className="image-container">
						<img className="fadeIn" src={projectimg3}/>
						<a target='_blank' href="https://unomomentopizzeria.netlify.app"><div className="text-overlay">
							<h3>Pizzeria Uno Momento</h3>
							<hr className="text-overlay-line"/>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum aperiam natus magnam cumque, quas iusto sint quibusdam laudantium ipsum voluptatum deserunt fugit pariatur doloremque aut porro dolor. Aut, quia.</p>
						</div></a>
					</div>
					<div className="image-container">
						<img className="fadeIn" src={projectimg2}/>
						<a target='_blank' href='https://baliesauny.com'><div className="text-overlay">
							<h3>Sklep Balie i Sauny</h3>
							<hr className="text-overlay-line"/>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum aperiam natus magnam cumque, quas iusto sint quibusdam laudantium ipsum voluptatum deserunt fugit pariatur doloremque aut porro dolor. Aut, quia.</p>
						</div></a>
					</div>
					<div className="image-container">
						<img className="fadeIn" src={projectimg1}/>
						<div className="text-overlay">
							<h3>Szkółka Wędkarska</h3>
							<hr className="text-overlay-line"/>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum aperiam natus magnam cumque, quas iusto sint quibusdam laudantium ipsum voluptatum deserunt fugit pariatur doloremque aut porro dolor. Aut, quia.</p>
						</div>
					</div>
				</div>
				<h2 className='websites-title'>Ulotki</h2>
				<hr className='web-line2' />
				<div className="ulotki">
					<img src={ulotka1}/>
					<img src={ulotka2}/>
				</div>
			</section>
		</section>
        </>
}

export default Projects