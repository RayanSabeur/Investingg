import Navbar from "./Components/Navbar";
import './style/navbar.css'

function App() {
  return (
    <>
    <>
  {/* Hello world */}
  {/* Navigation */}
   <Navbar/>
  {/* Header */}
  <header>
    <div className="container">
      <div className="intro-text">
        <div className="intro-heading">
          INVESTING
        </div>
        <div className="intro-lead-in">InvestinG est une plateforme de storyboard pour les startups et les investisseurs. Nous sommes là pour aider les startups à trouver les investisseurs appropriés qui les aideront à concrétiser leurs idées. Nos storyboards sont multiplateformes et sont conçus pour aider les startups à attirer l'attention des investisseurs.</div>
        <a href="#services" className="page-scroll btn btn-xl">
          Aku Bukan Sempit
        </a>
      </div>
    </div>
  </header>
  {/* Portfolio Grid Section */}
  <section id="portfolio" className="bg-light-gray">
    <div className="">
    <div>
      <span className="title-section-portfolio">NOTRE PORTFOLIO</span>
    </div>
    <hr/>   
  <div>
  <div>
   <div className="containerimg">
      <img src="./img/sweetooth.jpeg" alt="startup" className="imgtest"></img>
      
      <div className="vertical-portfolio">
      <div  className="number"> 01</div>
        <p class="vertical">
          <span class="text">storyboard de l'application</span>
        </p>
      </div>

   </div>
   <div className="desc-portfolio">
       <div className="titleportfolio">
       <a href="fd" className="titleproject">PROJET 1</a>
        <span className="spanproject" style={{color: 'white'}}>
        CONCEPTION DE <br/>STORYBOARD
        </span>
       </div>
        <p className="txt-project">Notre storyboard de l'application web pour SweetTooth est conçu pour <br/> aider les utilisateurs à trouver les meilleurs desserts dans leur ville. Nous <br/> avons travaillé sur l'expérience utilisateur pour rendre la recherche de <br/> desserts facile et amusante. Cliquez sur le bouton ci-dessous pour voir le <br/> storyboard.</p>
        <div class="buttons">
          <button class="fill">Voir le storyboard</button>
        </div>
   </div>
   </div>
  </div>
    </div>
  </section>
  {/* Team Section */}
  <section id="portfolio" >
    <div className="">
   
   
  <div>
  <div>
   <div className="containerimg">
      <img src="./img/wanderlust2.jpeg" alt="startup" className="imgtest"></img>
      
      <div className="vertical-portfolio">
      <div  className="number"> 02</div>
        <p class="vertical">
          <span class="text" style={{color: 'black'}}>storyboard de l'application</span>
        </p>
      </div>

   </div>
   <div className="desc-portfolio">
       <div className="titleportfolio">
       <a href="fd" className="titleproject">PROJET 2</a>
        <span className="spanproject">
        CONCEPTION DE <br/>STORYBOARD
        </span>
       </div>
        <p className="txt-project" style={{color: 'black'}}>Notre storyboard de l'application mobile pour Wanderlust est conçu pour <br/>aider les utilisateurs à planifier leurs voyages de manière efficace. Nous <br/>avons travaillé sur l'expérience utilisateur pour rendre la planification de voyages facile et amusante.<br/> Cliquez sur le bouton ci-dessous pour voir le storyboard.</p>
        <div class="buttons">
          <button class="fill">Voir le storyboard</button>
        </div>
   </div>
   </div>
  </div>
    </div>
  </section>
  <section id="portfolio" className="bg-light-gray">
    <div className="">
  
  <div>
  <div>
   <div className="containerimg">
      <img src="./img/greenlifeapp.jpeg" alt="startup" className="imgtest"></img>
      
      <div className="vertical-portfolio">
      <div  className="number"> 03</div>
        <p class="vertical">
          <span class="text">storyboard de l'application</span>
        </p>
      </div>

   </div>
   <div className="desc-portfolio">
       <div className="titleportfolio">
       <a href="fd" className="titleproject">PROJET 3</a>
        <span className="spanproject" style={{color: 'white'}}>
        CONCEPTION DE <br/>STORYBOARD
        </span>
       </div>
        <p className="txt-project">Notre storyboard de la campagne publicitaire pour <br/> GreenLife est conçu pour aider l'entreprise à promouvoir son engagement envers l'environnement. Nous <br/>avons travaillé sur l'expérience utilisateur pour rendre la campagne publicitaire percutante et mémorable.<br/> Cliquez sur le bouton ci-dessous pour voir le storyboard.</p>
        <div class="buttons">
          <button class="fill">Voir le storyboard</button>
        </div>
   </div>
   </div>
  </div>
    </div>
  </section>
  
  <section class="game-section">
  <h2 class="line-title">Nos Partenaire</h2>
  <div class="owl-carousel custom-carousel owl-theme">
  
    <div
      className="item"
      style={{
        backgroundImage:
          "url(./img/Fnac.png)"
      }}
    >
      <div class="item-desc">
        <h3>L'Oreal</h3>
      </div>
    </div>
    <div
      className="item"
      style={{
        backgroundImage:
          "url(./img/sfr.png)"
      }}
    >
      <div class="item-desc">
        <h3>Fnac</h3>
      
      </div>
    </div>
   
    
    
    <div
      className="item"
      style={{
        backgroundImage:
          "url(./img/nike.png)"
      }}
    >
      <div class="item-desc">
        <h3>Apple</h3>
      
      </div>
    </div>
  </div>

</section>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <span className="copyright">Copyright © Your Website 2024</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>



</>

    
    </>
  );
}

export default App;
