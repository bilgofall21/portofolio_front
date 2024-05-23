let projets = [
  {
    id : 1,
    nameProjet : "Darray Technologie",
    description : "Darray Technologie est un applicatiow web qui promouvoit des cours en ligne dans le domaine du developpement web et des nouvelles technologies de l'iformation et de la communication. Elle possede auussi un page youtube",
    linkProjet : "https://bilgofall21.github.io/darray-tech/",
    repotProjet : "https://github.com/bilgofall21/darray-tech.git",
    imageUrl : "assets/image/home-darray-top.png"
  },
  {
    id : 2,
    nameProjet : "Keurgui Service",
    description : "Keurgui Service est un applicatiow web de mise en relation entre employés de maison et employeur. Ce plateforme vise à faciliter le premier contact entre les différents entités du secteur des employés de maison.",
    imageUrl : "assets/image/kergui-home.png",
    linkProjet : "https://www.figma.com/design/VVTzHDQYOBq0sJWw5A08es/Untitled?node-id=891%3A29&t=OH857XwB3e7o9UuU-1",
    repotProjet : "https://github.com/bilgofall21/kergui-service.git",
  },
  {
    id : 1,
    nameProjet : "Guindiko",
    description : "Guindiko est un plateforme de mentorat qui vise à aider les jeunes apprenants ou les professionnelles en quettes de reconversion à trouver des conseils avisés auprés de de professionnels dans différents domaine",
    imageUrl : "assets/image/home-guindiko.png",
    linkProjet : "https://www.figma.com/design/LKGSN4Lmw40XQMOD8tBTr3/Guindiko?node-id=0%3A1&t=b9vNKImzKBEBoYJW-1",
    repotProjet : "https://github.com/bilgofall21/guindiko-app-indiv.git",

  }
]
let card = document.querySelector('#card-projet')

function afficherProjet(){
  projets.forEach(projet => {
    card.innerHTML += `
    <div class="col-sm-6 col-lg-4">
                <div class="card" style="width: 20rem;">
                  <img src=" ${projet.imageUrl} " class="card-img-top" style ="height: 12rem" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center fw-bold"> ${projet.nameProjet}</h5>
                    <p class="card-text">${projet.description}</p>
                  </div>
                  <div class="card-footer">
                  <div class="row">
                    <div class="col-6">
                      <h6 > Lien</h6>
                      <i class="bi bi-globe me-2"></i> <a href="${projet.linkProjet}"  target="_blank"> voir site</a>
                    </div>
                    <div class="col-6">
                      <h6 > Repository Github</h6>
                      <i class="bi bi-github me-2"></i><a href="${projet.repotProjet}"  target="_blank">voir depot</a>
                    </div>
                  </div>
                </div>
                </div>
              </div>
    `
  });
}
afficherProjet();


// logique pour appaitre le bouton toogle en mode ecran reduis
document.addEventListener("click", openNavMobile);

// 💙💙 methode pour faire apparaitre le menu toggle à la teille predefinis
function openNavMobile(event){
            // verifie l'existance de la class'mobile-nav-toogle' lors de l'event target
    const mobileNavElment = event.target.closest('.mobile-nav-toggle');
            // selectionne et recupere l'element avec l'id navbar
    const navbar = document.querySelector('#navbar');
    if(mobileNavElment){
            //  sur l'elenment navbar on y bascule l'element'navbar-moble' si ce dernier y ete elle sera supprimer
    navbar.classList.toggle('navbar-mobile');
            // sur le navabar on y bascule la class 'b--list'
        mobileNavElment.classList.toggle('bi-list');
            //  on bascule sur navbar la class 'bi-x'
        mobileNavElment.classList.toggle('bi-x');
    }
}
document.addEventListener("click", closeNavMobile);
// 💙💙methode pour fermer le menu berger
function closeNavMobile(event){
    // verification presence de laclass 'scrollto' lors du target
    const target = event.target.closest('.scrollto');
    // selectionne et recupere l'element avec l'id navbar
    const navbar = document.querySelector('#navbar');
    // recuperee tous les element avec un href de type ancre '#test'
    const elementhashtag =  document.querySelector(target.hash);

    if(target && elementhashtag){
        event.preventDefault();
        // verifie si navbar contient un elemet de type 'nav-moblie'
        if(navbar.classList.contains('nav-mobile')){
            // suppression e cette classe 'nav-mobile' sue navbar
            navbar.classList.remove('nav-mobile');
            // recupere l'element avec la classe 'mobile-nav-toggle'
            const navbarToggle = document.querySelector('.mobile-nav-toggle');
            // switch de la class 'bi-list' sur navbar
            navbarToggle.classList.toggle('bi-list');
            // switch de la class ' sur bi-x' sur navbar
            navbarToggle.classList.toggle('bi-x');
        }
        // permet au selection de l'encre de scrrller vers l'element specifié
        // scrollTo(target.hash);
    }
    true;
}


// ❤️❤️❤️❤️  methode qui gère la fixation du navbar lors du defilement
let headerSelected = document.querySelector("#header");
if(headerSelected){
        // calculposition vertical de l'en tete par rapport haut de la page
let headerPosition = headerSelected.offsetTop;
let nextElement = headerSelected.nextElementSibling;

const fixedHeader =  () => {
if((headerPosition - window.scrollY) <= 0){
headerSelected.classList.add('fixed-top');
nextElement.classList.add('scrolled-offset')
}else{
    headerSelected.classList.remove('fixed-top');
    nextElement.classList.remove('scrolled-offset');
}
}

// ajout d'un event pour detecter le chargement de la page et le defilement
window.addEventListener('load', fixedHeader);
const onscroll = (el, listener) =>{
    el.addEventListener('scroll', listener);
};
onscroll(document, fixedHeader);
}
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
// ### -------------  boutou back to top
let boutonTop = document.querySelector('.back-to-top');
if(boutonTop){
    const topAction = () =>{
        if(window.scrollY > 100){
            boutonTop.classList.add('active')
        }else{
            boutonTop.classList.remove('active');
        }
    }
    // ajout d'event declencheur de topAction
    window.addEventListener('load',topAction);
    onscroll(document, topAction);
}

// ### ---------------- fonction qui gere le defilement de la page


    // Fonction pour sélectionner un élément
    const select = (el) => document.querySelector(el);

    // Fonction pour faire défiler jusqu'à un élément
    const scrollto = (el) => {
        // selectionl'elemnt avec id header
      let header =document.querySelector('#header');
        // calcul hauteur entete pour bien ajuster le defilement jusqu'a la section cible
      let offset = header.offsetHeight;

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      });
    };

    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });

    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        let hash = this.getAttribute('href');
        if (select(hash)) {
          scrollto(hash);
          history.pushState(null, null, hash);
        }
      });
    });

// gestion de la navigation via ancre
        // ecouteur d'evenement pour chargement de la page
        window.addEventListener('load',()=>{
             // verfie si l'url contien un #
             if(window.location.hash){
                // selection l'element et defilement
                if(document.querySelector(window.location.hash)){
                    scrollTo(window.location.hash)
                }
            }
        });


       
// gestion du link active lors de la navigation
let navbarlinks = document.querySelector('#navbar .scrollto', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)
