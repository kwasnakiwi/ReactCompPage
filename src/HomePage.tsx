import image1 from './assets/images/email-42841571.png';
import project1 from './assets/images/full-stack-developer-icon 1.png';
import project2 from './assets/images/project-work-icon 1.png';
import project3 from './assets/images/chart-arrow-up-icon 1.png';
import project4 from './assets/images/website-layout-icon 1.png';
import project5 from './assets/images/productivity-icon 1.png';
import project6 from './assets/images/cyber-security-icon 1.png';
import projectimg1 from './assets/images/Zrzut ekranu 2024-08-10 115841 (1).png';
import projectimg2 from './assets/images/Zrzut ekranu 2024-08-10 120008.png';
import projectimg3 from './assets/images/pizzeria.png';
import projectimg4 from './assets/images/project4.png';
import szymon from './assets/images/Szymon.jpeg';
import pawel from './assets/images/Pawel.jpeg';
import natalia from './assets/images/Natalia.jpeg';
import { Link } from 'react-router-dom';

function HomePage() {
    return<>
    <section className="center-container">

    <div className="web-top">
      <div className="text-n-picture">
        <div className="main-text">
          <h1 className="title">
            Odkryj Moc Internetu – Twój Klucz do Sukcesu Online
          </h1>
          <p className="under-title">
            Tworzenie stron internetowych to nasza pasja i specjalność. 
            Oferujemy kompleksowe usługi w zakresie projektowania i wdrażania 
            stron internetowych, które pomogą Twojej firmie wyróżnić się w sieci. 
            Dzięki naszym rozwiązaniom Twoja strona będzie nie tylko estetyczna, 
            ale także funkcjonalna i zoptymalizowana pod kątem SEO.
          </p>
          <div className="button1">
            <Link className="projects-button" to='/projects'>Projekty</Link>
          </div>
        </div>
          <img className="first-image" src={image1}/>
        </div>
          <div className="text-n-lines">
            <div className="text-n-line">
              <h3 className="overline-text">Responsywność</h3>
              <hr className="line"/>
            </div>
            <div className="text-n-line">
              <h3 className="overline-text">Strony dla firm</h3>
              <hr className="line"/>
            </div>
            <div className="text-n-line">
              <h3 className="overline-text">Web design</h3>
              <hr className="line"/>
            </div>
          </div>
        </div>
        
    <div className="over-offers">
      <hr className="line2"/>
      <h2 className="over-offers-text">Usługi które oferujemy</h2>
    </div>
    <div className="offers-container">
      <div className="offers">
        <div className="offer">
          <h3 className="offer-title">UX/UI Design</h3>
          <p className="offer-content">
            Skupiamy się na tworzeniu intuicyjnych i przyjaznych dla użytkownika interfejsów, które zamieniają przeglądanie stron internetowych w inspirującą podróż.
          </p>
          <img className="offer-image" id="offer-image1" src={project1}/>
        </div>
        <div className="offer">
          <h3 className="offer-title" id="offer-title1">Re-design istniejących stron</h3>
          <p className="offer-content">
            Odnawiamy i modernizujemy przestarzałe strony internetowe, poprawiając ich wygląd, funkcjonalność i zgodność z najnowszymi standardami.
          </p>
          <img className="offer-image" src={project2}/>
        </div>
        <div className="offer"> 
          <h3 className="offer-title">Optymalizacja SEO</h3>
          <p className="offer-content">
            Wykorzystujemy skuteczne techniki SEO, aby poprawić ranking Twojej strony w wyszukiwarkach i przyciągnąć więcej odwiedzających.
          </p>
          <img className="offer-image"  id="offer-image2" src={project3}/>
        </div>
        <div className="offer">
          <h3 className="offer-title">Aplikacje webowe</h3>
          <p className="offer-content">
            Projektujemy i wdrażamy zaawansowane aplikacje webowe, dostosowane do indywidualnych potrzeb Twojego biznesu.
          </p>
          <img className="offer-image" id="offer-image3" src={project4}/>
        </div>
        <div className="offer">
          <h3 className="offer-title" id="offer-title2">Optymalizacja szybkości ładowania </h3>
          <p className="offer-content" id="offer-content1">
            Zapewniamy błyskawiczne ładowanie stron, dzięki czemu użytkownicy mogą cieszyć się płynnym i niezakłóconym działaniem już od pierwszego kliknięcia.
          </p>
          <img className="offer-image" src={project5}/>
        </div>
        <div className="offer"> 
          <h3 className="offer-title">Certyfikaty SSL</h3>
          <p className="offer-content">
            Instalujemy certyfikaty SSL, aby zapewnić bezpieczne połączenie i zwiększyć zaufanie użytkowników do Twojej strony.
          </p>
          <img className="offer-image"  id="offer-image4" src={project6}/>
        </div>
      </div>
    </div>
    <div className="projects">
      <div className="projects-text">
        <h2 className="projects-over-title">PROJEKTY:</h2>
        <h2 className="projects-title">Dlaczego warto nam zaufać w tworzeniu stron internetowych?</h2>
        <hr className="line3"/>
        <div className="projects-paragrafs">
          <p className="projects-paragraf">
            Twoje sukcesy to nasze sukcesy. Jako mały, zgrany zespół, traktujemy każdego klienta jak partnera, a nie tylko zleceniodawcę. Każdy projekt jest dla nas nie tylko zadaniem, ale także osobistą misją. Jesteśmy z Tobą na każdym etapie – od pierwszego szkicu po ostateczny efekt. Twoja strona nie tylko wygląda doskonale, ale także odzwierciedla Twoje wartości i cele.  
          </p>
          <p className="projects-paragraf">
            Wybierając nas, zyskujesz partnera w tworzeniu spersonalizowanych rozwiązań webowych.
            Nie tylko projektujemy strony, ale również budujemy relacje, które przynoszą wymierne rezultaty. Daj nam szansę, a przekonasz się, jak nasze indywidualne podejście do projektowania stron może przyczynić się do sukcesu Twojego biznesu.
          </p>
        </div>
      </div>
    </div>
    <div className="websites-columns">
      <div className="webisites-column">
        <div className="image-n-title">
          <img className="projects-image fadeIn" src={projectimg1}/>
          <h3 className="projects-under-title">
            Szkółka Wędkarska
          </h3>
        </div>
        <div className="image-n-title">
          <a target='_blank' href='https://baliesauny.com'><img className="projects-image fadeIn" src={projectimg2}/></a>
          <h3 className="projects-under-title">
            Sklep Balie Sauny
          </h3>
        </div>
      </div>
      <div className="webisites-column">
        <div className="button2-box">
          <a className="button2" href="">Zobacz wszystkie projekty <img src=""/></a>
        </div>
        <div className="image-n-title1 image-n-title2">
        <a target='_blank' href='https://pizzeriaunomomento.pl'><img className="projects-image fadeIn" src={projectimg3}/></a>
          <h3 className="projects-under-title">
            Pizzeria Uno Momento
          </h3>
        </div>
        <div className="image-n-title1 image-n-title2">
          <img className="projects-image fadeIn" src={projectimg4}/>
          <h3 className="projects-under-title">
            Strona X
          </h3>
        </div>
      </div>
    </div>
    <div className="meet-us-container">
      <div className="meet-us-top">
        <h1 className="meet-us-title">Za Kulisy Naszych Kreacji – Poznaj Naszą Grupę</h1>
      </div>
      <div className="meet-us-content">
        <div className="meet-us-line">
          <img className="meet-us-img" id='hideOnSmallScreens' src={szymon}/>
          <div className="meet-us-text">
            <h2 className="name">Szymon</h2>
            <img className="meet-us-img" id='showOnSmallScreens' src={szymon}/>
            <p className="under-name">
              Magik od stron internetowych, który potrafi zamienić zwykły kod w cyfrową sztukę. Gdy inni zastanawiają się, jak zbudować stronę, Szymon już ma gotowy plan, kawę w ręku i dwie godziny przewagi. Znany z tego, że jego strony ładują się szybciej niż pizza na dowóz, a każdy piksel jest na swoim miejscu, jakby był tam od zawsze. Jeśli coś nie działa, Szymon naprawi to w tempie, które zawstydzi błyskawicę. Jego supermoc? Tworzenie stron, które są tak intuicyjne, że nawet babcia potrafi z nich korzystać.  
            </p>
          </div>
        </div>
        <div className="meet-us-line">
          <img className="meet-us-img" id='hideOnSmallScreens' src={pawel}/>
          <div className="meet-us-text">
            <h2 className="name">Paweł</h2>
            <img className="meet-us-img" id='showOnSmallScreens' src={pawel}/>
            <p className="under-name">
              Grafik, który potrafi zaskoczyć nawet sam siebie. Jego komputer to pole bitwy na którym kolory walczą o najlepsze miejsce, a czcionki ustawiają się w idealnych liniach, jakby miały musztrę.  
              Paweł jest znany z tego, że potrafi z każdej koncepcji wycisnąć ostatnią kroplę kreatywności. Ma oko do detali i cierpliwość, by przesuwać każdy element aż będzie doskonały. A jeśli coś nie pasuje, Paweł z uśmiechem na twarzy sprawi, że nagle zacznie. Jego prace nie tylko wyglądają świetnie – one żyją, oddychają i opowiadają historie, które zostają z Tobą na długo.  
            </p>
          </div>
        </div>
        <div className="meet-us-line">
          <img className="meet-us-img" id='hideOnSmallScreens' src={natalia}/>
          <div className="meet-us-text">
            <h2 className="name">Natalia</h2>
            <img className="meet-us-img" id='showOnSmallScreens' src={natalia}/>
            <p className="under-name">
              Mistrzyni sztuki komunikacji, która sprawia, że każdy klient czuje się jak najważniejsza osoba na świecie. Gdy inni zastanawiają się, jak rozwiązać problem, Natalia już ma gotowe trzy rozwiązania i czwarty plan awaryjny na wszelki wypadek. Klienci często mówią, że rozmowa z Natalią to jak kawa z najlepszą przyjaciółką – zawsze wyjdziesz zadowolony i z nową dawką pozytywnej energii. Jej supermoc? Rozbrajanie nawet najbardziej wymagających sytuacji urokiem i profesjonalizmem, co sprawia, że każdy klient wraca z uśmiechem i chęcią na więcej współpracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <script></script>

        </>

    
}
export default HomePage