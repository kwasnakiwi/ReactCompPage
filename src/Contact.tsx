import image2 from './assets/images/[removal.ai]_58dc3d9d-ad98-42d0-8927-2e79c5695f3d_ai-generated-8772394_1920 1.png';
import malpa from './assets/images/attherate-icon 1.png';
import phone from './assets/images/phone-call-icon 1.png';
import linkedin from './assets/images/Linkedin 1.png';
import ig from './assets/images/ig 1.png';
import git from './assets/images/git 1.png';

function Contact() {
    return <section className="center-container">
      <div className="web-top2">
        <div className="web-top-text2">
          <h1 className="title2">Twój projekt w dobrych rękach - Napisz do Nas</h1>
          <p className="under-title2">Chcesz stworzyć wyjątkową stronę interneNapisz do Nastową dla swojej firmy? Skontaktuj się z nami! Wypełnij formularz, zadzwoń lub napisz – odpowiemy szybko i zaproponujemy najlepsze rozwiązania dostosowane do Twoich potrzeb.</p>
          <img className='webtop2image-som' src={image2}/>
          <div className="icons-box">
            <div className='image-box'>
              <img src={phone}/>
              <h3>+48 509 325 235</h3>
            </div>
            <div className='image-box'>
              <img src={malpa}/> 
              <h3>xyz@gmail.com</h3>
            </div>
          </div>
        </div>
        <img className='webtop2image' src={image2}/>
      </div>
          
    </section>
    


}

export default Contact