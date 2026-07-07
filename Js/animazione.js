$(document).ready(function(){

  function funzioneScroll(){  
    //Funzione per gestire la comparsa degli elementi che hanno come class .animation 
    $(".animation").each(function(){
      var posizioneBottom = $(this).position().top;
      var posizioneScroll = $(window).scrollTop();
      var fattoreY = ($(window).width()>800) ? 0.7 : 0.9;

      if((posizioneScroll+($(window).height()*fattoreY))>posizioneBottom){
        $(this).addClass("fadeinup");
      } else{
        $(this).removeClass("fadeinup");
      }
    });

  }

  funzioneScroll();

  /* Funzione per gestire gli elementi in scroll*/
  $(window).scroll(function(){
    
    /* Se il menu è aperto e si scrolla la pagina si chiude il menu */
    if($('#navbarSupportedContent').attr("class") === 'navbar-collapse justify-content-end collapse show'){
        $('#navbarSupportedContent').removeClass('show');
    }

    funzioneScroll();
  });
});


// Funzione per la gestione del parallax effect
const items = Array.from(document.querySelectorAll(".banner")).map(section => {
  return {
    section,
    bg: section.querySelector(".banner-bg"),
    current: 0
  };
});

const ease = 0.05;     // morbidezza (0.05 più “cinema”, 0.12 più reattivo)
const speed = 0.6;    // intensità parallax (0.2 leggero, 0.35 ok, 0.6 forte)

function animate() {
  const vh = window.innerHeight;

  items.forEach(item => {
    const rect = item.section.getBoundingClientRect();

    // Solo se è in zona viewport (un po' di margine)
    if (rect.bottom < -vh || rect.top > vh * 2) return;

    // progress relativo del banner: 0 quando inizia a entrare, 1 quando esce
    const progress = (vh - rect.top) / (vh + rect.height);

    // target spostamento (centrato intorno a 0)
    const target = (progress - 0.5) * rect.height * speed;

    // easing/inertia
    item.current += (target - item.current) * ease;

    item.bg.style.transform = `translate3d(0, ${item.current}px, 0)`;
  });

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
