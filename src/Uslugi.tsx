import uslugiimg1 from './assets/images/Zabezpieczenie 1.png';
import uslugiimg2 from './assets/images/Telefon 1.png';
import uslugiimg3 from './assets/images/tablet-1704786_1920 1.png';
import uslugiimg4 from './assets/images/tablet-1704823_1920 1.png';
import uslugiimg5 from './assets/images/geometric-7719159_1920 1.png';

function Uslugi() {
    return(
        <section className="center-container">
        <div className="web-top4">
          <img className="img1" src={uslugiimg2}/>
          <div className="web-top-text4">
            <h1 className="title4">Nasza Oferta Usług Webowych: Porównanie Planów dla Stron, Sklepów i Rozwiązań Customowych</h1>
            <p className="under-title4">
              Znajdź najlepszy plan dla swojej witryny internetowej dzięki naszej ofercie dostosowanej do różnorodnych potrzeb. Oferujemy usługi projektowania stron firmowych, tworzenie sklepów internetowych oraz realizację indywidualnych projektów.
            </p>
            <div className="uslugi-imgs">
                <img className="img1-som" src={uslugiimg2}/>
                <img className="img2-som" src={uslugiimg1}/>
            </div>
          </div>
          <img className="img2" src={uslugiimg1}/>
        </div>
        <div className='uslugi-content'>
            <div className='uslugi-item'>
                <div className='uslugi-item-text'>
                    <h1 className='uslugi-title'>Tworzenie prostych stron</h1>
                    <hr className='uslugi-line'/>
                    <p className="uslugi-paragraph">
                        <b>Tworzymy prostą stronę,</b> która będzie doskonałą wizytówką Twojej firmy. Oferujemy pełne wsparcie w procesie tworzenia, począwszy od darmowego hostingu na pierwszy rok, przez wykupienie domeny, aż po zapewnienie certyfikatu SSL. Dodatkowo, wprowadzimy elementy SEO, aby Twoja strona była widoczna w wyszukiwarkach. Skorzystaj z naszej kompleksowej oferty i zbuduj swoją obecność w sieci!
                    </p>
                </div>
                <img className='uslugi-item-img1' src={uslugiimg3}/>
            </div>
            <div className='uslugi-item-hom'>
                <img className='uslugi-item-img1' src={uslugiimg4}/>
                <div className='uslugi-item-text'>
                    <h1 className='uslugi-title'>Realizacja innowacyjnych projektów</h1>
                    <hr className='uslugi-line1'/>
                    <p className="uslugi-paragraph">
                        <b>Tworzymy zaawansowane rozwiązania,</b> które spełnią oczekiwania Twojej firmy. Oferujemy pełną funkcjonalność, w tym formularz kontaktowy, panel administracyjny do zarządzania treścią, śledzenie ruchu użytkowników oraz system logowania. Integrujemy zewnętrzne API, takie jak Stripe i Przelewy24, oraz współpracujemy z lokalnymi sieciami, co zwiększa komfort korzystania z Twojej platformy.
                    </p>
                </div>
            </div>
            <div className='uslugi-item2'>
                <div className='uslugi-item-text'>
                    <h1 className='uslugi-title'>Realizacja innowacyjnych projektów</h1>
                    <hr className='uslugi-line1'/>
                    <p className="uslugi-paragraph">
                        <b>Tworzymy zaawansowane rozwiązania,</b> które spełnią oczekiwania Twojej firmy. Oferujemy pełną funkcjonalność, w tym formularz kontaktowy, panel administracyjny do zarządzania treścią, śledzenie ruchu użytkowników oraz system logowania. Integrujemy zewnętrzne API, takie jak Stripe i Przelewy24, oraz współpracujemy z lokalnymi sieciami, co zwiększa komfort korzystania z Twojej platformy.
                    </p>
                </div>
                <img className='uslugi-item-img1' src={uslugiimg4}/>
            </div>
            <div className='uslugi-item'>
                <div className='uslugi-item-text'>
                    <h1 className='uslugi-title'>Tworzenie efektownych<br/>ulotek reklamowych</h1>
                    <hr className='uslugi-line2'/>
                    <p className="uslugi-paragraph">
                        <b>Zajmujemy się tworzeniem prostych ulotek,</b> które skutecznie przyciągną uwagę Twoich klientów. Nasze projekty są przemyślane i dostosowane do Twoich potrzeb, dzięki czemu komunikaty reklamowe będą klarowne i atrakcyjne. Oferujemy kompleksowe wsparcie w procesie projektowania, aby Twoja ulotka wyróżniała się na tle konkurencji i efektywnie przekazywała kluczowe informacje.
                    </p>
                </div>
                <img className='uslugi-item-img2' src={uslugiimg5}/>
            </div>
        </div>
      </section>
    )
}
export default Uslugi